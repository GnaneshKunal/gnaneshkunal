
(setq org-id-link-to-org-use-id
      'create-if-interactive-and-no-custom-id)

;; Based on org-expiry-insinuate
(add-hook 'org-insert-heading-hook 'org-id-get-create)
(add-hook 'org-after-todo-state-change-hook 'org-id-get-create)
(add-hook 'org-after-tags-change-hook 'org-id-get-create)

(defun my/org-update-ids ()
  (interactive)
  (let* ((tree (org-element-parse-buffer 'headline))
         (map (reverse
               (org-element-map tree 'headline
                 (lambda (hl)
                   (org-element-property :begin hl))))))
    (save-excursion
      (cl-loop for point in map do
               (goto-char point)
               (org-id-get-create)))))


(setq org-export-html-validation-link nil)
(setq org-export-html-postamble nil)


(defvar my-org-html-export-theme 'tsdh-light)

(defun my-with-theme (orig-fun &rest args)
  (load-theme my-org-html-export-theme)
  (unwind-protect
      (apply orig-fun args)
    (disable-theme my-org-html-export-theme)))

(with-eval-after-load "ox-html"
  (advice-add 'org-export-to-buffer :around 'my-with-theme))

(require 'ox-publish)

(defcustom blog-base-dir "~/blog/" "Base directory for blog files")

(setq website-html-head "<link rel=\"stylesheet\" href=\"https://watercss.netlify.app/dist/light.css\">")

(setq website-html-preamble
  "<h1>Richard Kallos</h1>
<hr></hr>
<div class=\"nav\">
<ul>
<li><a href=\"/\">Home</a></li>
<li><a href=\"/static/about.html\">About</a></li>
<li><a href=\"https://github.com/rkallos\">GitHub</a></li>
<li><a href=\"/static/resume.html\">Résumé</a></li>
<li><a href=\"/index.xml\">RSS</a></li>
</ul>
</div>")

(setq website-html-postamble "<div class=\"footer\"> Copyright 2016 %a (%v
  HTML).<br> Last updated %C.<br> Built with %c.  </div>")

(setq org-publish-project-alist
      '(("posts"
         :base-directory "org/"
         :base-extension "org"
         :publishing-directory "public/"
         :recursive t
         :publishing-function org-html-publish-to-html
         :auto-sitemap t
         :sitemap-title "Gnanesh logs"
         :sitemap-filename "index.org"
         :sitemap-style list
         :author "Gnanesh"
         :email "gnaneshkunal@outlook.com"
         :sitemap-sort-files anti-chronologically
         :sitemap-file-entry-format "%d - %t"
         :html-doctype "html5"
         :html-html5-fancy t
         :html-head "<link rel=\"stylesheet\" href=\"https://watercss.netlify.app/dist/light.css\">"
         :with-creator t)
        ("css"
          :base-directory "css/"
          :base-extension "css"
          :publishing-directory "public/css"
          :publishing-function org-publish-attachment
          :recursive t)
        ("img"
          :base-directory "img/"
          :publishing-directory "public/img"
          :publishing-function org-publish-attachment
          :recursive t)
        ("all" :components ("posts" "css" "img"))))

