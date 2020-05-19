# Makefile for myblog

.PHONY: all publish publish_no_init

all: pub

pub:
								@echo "Publishing... with default Emacs configuration."
								emacs --funcall org-publish-all

publish: publish.el
								@echo "Publishing... with current Emacs configurations."
								emacs --batch --load publish.el --funcall org-publish-all

publish_no_init: publish.el
								@echo "Publishing... with --no-init."
								emacs --batch --no-init --load publish.el --funcall org-publish-all

clean:
								@echo "Cleaning up.."
								@rm -rvf *.elc
								@rm -rvf public/img/* public/*.html public/css/*
								@rm -rvf ~/.org-timestamps/*
