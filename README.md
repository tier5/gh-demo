About The Project << Github Pages >>


Things to note before Trying to use it

Make sure Vagrant is installed locally and works.. In case you get an error and it tells you to change enable hardware virtualization technology (VT-x) , then just enable it from BIOS.
Clone Repo --> https://github.com/tier5/gh-demo.git
Then run this command --> vagrant box add ubuntu.16.04 https://cloud-images.ubuntu.com/xenial/current/xenial-server-cloudimg-i386-vagrant.box
Then Do --> vagrant up
Then Do --> vagrant ssh