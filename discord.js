// Beispiel für die serverseitige Logik zur Überprüfung des Benutzeranmeldestatus
export async function checkUserLoggedIn(req, res) {
    try {
        const response = { status: 200 }; 
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Fehler beim Überprüfen der Benutzeranmeldung:', error);
        return false;
    }
}