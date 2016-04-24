var addCategoryButton;var addCategorySelect;var pageCategoryList;var showOptional;var optionalForm;function onProgramCreateLoad()
{var key;addCategoryButton=document.getElementById("addcategory");addCategorySelect=document.getElementById("levelThreeCategories");pageCategoryList=document.getElementById("pageCategoryList");showOptional=document.getElementById("showOptional");optionalForm=document.getElementById("optionalContent");setupImageArea();setupLevelTwoCategory();initImagesFromPage();var liCategories=pageCategoryList.getElementsByTagName("li");for(key in liCategories)
if(liCategories.hasOwnProperty(key))
levelThreeCategories.push(liCategories[key].innerHTML);buildMyLevelThreeSelect();updateMyCategoryList();showHideOptional();addCategoryButton.addEventListener("click",addCategoryEvent);initialCategorySelect.addEventListener("change",levelTwoChange);showOptional.addEventListener("change",showHideOptional);pageStatus.addEventListener("click",uploadPage);}
function uploadPage(event)
{var content="",images="",keywords="",categories="";var tempCategories=[];var pid=getOrDefault(mainForm.getAttribute("data-pid"),false);setInputStatus(pageStatus,inputStatus.RUNNING,"Saving page...");content=JSON.stringify({"description":mainForm.elements.description.value,"instructions":mainForm.elements.instructions.value,"notes":optionalForm.elements.notes.value,"tagline":optionalForm.elements.tagline.value,"translatedfor":optionalForm.elements.translatedfor.value});tempCategories.push(levelOneCategory);tempCategories.push(levelTwoCategory());tempCategories=tempCategories.concat(levelThreeCategories);categories=tempCategories.join()+" ";console.log(categories);keywords=optionalForm.elements.keywords.value.split(/[ ,\t]/g).join()+" ";images=imageLinks.join()+" ";event.preventDefault();var data=new FormData();data.append("title",mainForm.elements.title.value);data.append("key",mainForm.elements.key.value);data.append("content",content);data.append("version",optionalForm.elements.version.value);data.append("size",optionalForm.elements.size.value);data.append("images",images);data.append("categories",categories);data.append("keywords",keywords);if(pid!==false&&!isNaN(pid))
data.append("pid",pid);genericXHR("/query/pagesubmit",data,pageStatus,redirectSuccess);}
function showHideOptional(event)
{if(showOptional.checked)
{optionalForm.style.visibility="visible";}
else
{optionalForm.style.visibility="hidden";}}
function updateMyCategoryList()
{updateCategoryList(pageCategoryList,levelThreeCategories,addCategorySelect,levelTwoCategory());}
function buildMyLevelThreeSelect()
{buildLevelThreeSelect(addCategorySelect,levelTwoCategory());}
function levelTwoChange(e)
{levelThreeCategories=[];buildMyLevelThreeSelect();updateMyCategoryList();}
function addCategoryEvent(e)
{levelThreeCategories.push(levelThreeCategory());buildMyLevelThreeSelect();updateMyCategoryList();}
function levelThreeCategory()
{return addCategorySelect.options[addCategorySelect.selectedIndex].value;}
function levelTwoCategory()
{return initialCategorySelect.options[initialCategorySelect.selectedIndex].value;}
window.addEventListener("load",onProgramCreateLoad);
