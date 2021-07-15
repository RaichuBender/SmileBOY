TARGET	:= bin/SMILEBOY.PRG
SOURCES	:= src/SMILEBOY.SB4

$(TARGET):	$(SOURCES)
	cpp $< -Iinclude > $@

.PHONY:		clean
clean:
	@-rm -vf bin/*
