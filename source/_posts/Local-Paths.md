---
title: Install packages & libraries on your local paths
date: "2018-05-13"
---

Fedora is my favorite Linux distribution which is sponsored by Red Hat. Fedora 28 is out with a lot of features. Instead of upgrading my fedora using `dnf-plugin-system-upgrade` or the `GNOME Software` way, I'd always like to download the ISO and install it from a USB Flash Drive (cause that returns a pointer to the ISO and I could use it anywhere (ಠ⌣ಠ)).
<!-- more -->

I have a love/hate relationship is with the Red Hat's `Automatic Partition` which usually leaves with just 50GB for the `Computer` (`/`) and the rest for your `$HOME`. So I usually do `Manual Partition` and give the partitions the right space. But `Automatic Partitions` will save you some time by automatically giving other partitions the right amount of space.

This time, I opted for `Automatic Partition` and now I'm left with just 52.6GB. Actually its just 42.7GB after doing `dnf upgrade`. In my past, the first time when I've given Fedora a try, I used it for more days than I thought I would and I was struggling with <12GB of free space. That was the time, I thought, I wish I had known how to configure and install libraries on my local paths without letting everything existing packages down(`pkg-config`).

Now, I've finally found a way to install libraries on my own path. I like to use `$HOME/.local/`.

###### The Usual way

Usually, When you compile libraries from source, the usual way would be
```bash
./configure
make
sudo make install
```

or 

```bash
./autogen.sh
./configure
make
sudo make install
```

Where do you think the libraries get installed?

That's `/usr/local/include` for headers, `/usr/local/lib/` for your libraries that you can link with your programs. And also, `pkg-config` easily finds your libraries and packages. 

What if you have less space on your `Computer` or like to install a package in a different location (like as I said `$HOME/.local/`)?

#### What You Need To DO

Well, that's easy though. The `configure` script also has a `--prefix` argument that allows you to install the package on given path.
```bash
./configure --prefix $HOME/.local
make
make install
```

<b>Note that you don't need the sudo command</b>, as the `$HOME` doesn't require you to have `root` privileges.

After installing
```shell
[monster@monster json-c]$ whereis json-c
json-c: /home/monster/.local/include/json-c
```

But will your packages be found and linked to other programs that use this packages?

<b>Now I could finally install packages on my local paths.</b> (YAY)
<b>Will I be able to use it? The answer is NO.</b> (BOOO)

You must add the path to your `$PATH` variable.

```bash
# ~.bashrc
export PATH="$PATH:$HOME/.local/lib:$HOME/.local/share:$HOME/.local/include:$HOME/.local/bin"
```

Sometimes you get complains about shared libraries.
```bash
# ~/.bashrc
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:$HOME/.local/lib"
export LIBRARY_PATH="$LIBRARY_PATH:$HOME/.local/lib"
```

Also, you love `pkg-config`
```bash
# ~/.bashrc
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:$HOME/.local/lib/pkgconfig"
```

When you manually compile, your `C/C++` compiler complains that it couldn't find the headers.

```bash
# ~/.bashrc
export CPATH="$CPATH:$HOME/.local/include"
export C_INCLUDE_PATH="$C_INCLUDE_PATH:$HOME/.local/include"
export CPLUS_INCLUDE_PATH="$CPLUS_INCLUDE_PATH:$HOME/.local/include"
```


#### Useful Links
* [GCC Environemnt Variables](http://www.network-theory.co.uk/docs/gccintro/gccintro_23.html)
* [pkg-config path Environment Variables](https://askubuntu.com/questions/210210/pkg-config-path-environment-variable)
* [Shared Libraries paths'](https://stackoverflow.com/questions/480764/linux-error-while-loading-shared-libraries-cannot-open-shared-object-file-no-s)
