export async function userInGuildWithPermissions() {
    const response = await fetch('/api/guild/00000000')
    if (response.status != 200){
        window.open(discordAuth2Link, "_self");
        this.servers= []
    }
    else{
        response.json()
        .then(data => {
            this.servers = data;
        })
    }
}