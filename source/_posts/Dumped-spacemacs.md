---
title: Dumped Spacemacs for Vanilla Emacs
date: "2018-04-14"
---

The start time for <a href="http://spacemacs.org/">Spacemacs</a> used to be pretty high. So I've tried unsetting few layers, but the problem still persists.

I'd planned on dumping Spacemacs but I've started my emacs journey with Spacemacs, So learning the underlying layer of emacs was too difficult to me.
<!-- more -->
I've seen myself deleting Spacemacs, giving a try on <a href="https://www.gnu.org/software/emacs/">Vannila Emacs</a> and coming back to Spacemacs again. 


<div align="center">
	<img height="200" width="200" src="https://www.dropbox.com/s/2le5houarieb132/emacs.png?raw=1" />
</div>


Most of the times the common problems I've faced was <i><b>I can't find any packages.</b></i>

I wish I've known about <b><a href="https://melpa.org/">Melpa</a> not showing me newer packages.</b>
I've gone through the Melpa Installation steps, which was the starting point to configure Emacs with my own configuration.

By copy pasting certain elisp commands on <i>`.emacs`</i> I've found elisp to be a lot simpler and I could clearly understand what's happening in the background as well.


#### Melpa
Add the following in your `.emacs` and your are done.

```lisp
(add-to-list 'package-archives
             '("melpa-stable" . "https://stable.melpa.org/packages/") t)
```

#### Autocomplete
Autocomplete is a must. You really need it if you need some cool `auto-completition` for other languages as well.

```lisp
M-x package-install [RET] auto-complete [RET]
```

```lsip
;;.emacs
;; Autocomplete
(ac-config-default)
```

#### C/C++

I love clang. And you must love it too. <a href="https://github.com/Sarcasm/irony-mode">irony</a> provides better editing experience for C and  C++, and is based on `libclang`. 


```lisp
M-x package-install [RET] irony [RET]
```

```lisp
;;.emacs
;; irony

(add-hook 'c++-mode-hook 'irony-mode)
(add-hook 'c-mode-hook 'irony-mode)
(add-hook 'objc-mode-hook 'irony-mode)

(add-hook 'irony-mode-hook 'irony-cdb-autosetup-compile-options)
```

#### Python Mode

I'm using `anaconda-mode` as my python environment. The <a href="https://github.com/jorgenschaefer/elpy">`elpy`</a> is another python environment with `automatic code rules`.


```lisp
M-x package-install [RET] anaconda-mode [RET]
```

```lisp
;;.emacs
;; Anaconda-mode python
(add-hook 'python-mode-hook' 'anaconda-mode)
```

#### Web

You definitly need it. 

```lisp
M-x package-install [RET] web-mode [RET]
M-x package-install [RET] tide [RET]
```

```lisp
;;.emacs
;;; HTML

(require 'web-mode)
(add-to-list 'auto-mode-alist '("\\.html?\\'" . web-mode))

;; tide typescript
(defun setup-tide-mode ()
  (interactive)
  (tide-setup)
  (flycheck-mode +1)
  (setq flycheck-check-syntax-automatically '(save mode-enabled))
  (eldoc-mode +1)
  (tide-hl-identifier-mode +1)
  ;; company is an optional dependency. You have to
  ;; install it separately via package-install
  ;; `M-x package-install [ret] company`
  (company-mode +1))

;; aligns annotation to the right hand side
(setq company-tooltip-align-annotations t)

;; formats the buffer before saving
(add-hook 'before-save-hook 'tide-format-before-save)

;; tide typescript
(add-hook 'typescript-mode-hook #'setup-tide-mode)
```

#### Git

Finally.


```lisp
M-x package-install [RET] magit [RET]
```

```lisp
;;.emacs
;; magit
(global-set-key (kbd "C-x g") 'magit-status)
```

Thinks are a bit fast now though. The startup time has decreased by <b>75%</b>. I'm finally experiencing the same joy I've got while using spacemacs.

Well, you could mail, play games, listen to songs and do most of the things without leaving <a href="https://www.gnu.org/software/emacs/">emacs</a>.

Hey, do You know you could even control butterflies without leaving emacs?
<div align="center">
	<img src="https://www.dropbox.com/s/1ieuooe2vgk1iie/butterfly.png?raw=1" />
</div>
