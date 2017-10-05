
# This is using bluemix cli (not wsk)

bx plugin install Cloud-Functions -r Bluemix
bx login -a api.ng.bluemix.net -o bluemixaccount@some.com -s dev 
bx wsk action invoke /whisk.system/utils/echo -p message hello --result