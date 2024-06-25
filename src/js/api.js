export const postData = async (param1, param2) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("event", param1);
        urlencoded.append("sub_event", param2);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
            credentials: 'include'
        };

        fetch("https://api.moundxr.com/api/v1/event", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    } catch (error) {
        console.error('Error posting data:', error);
    }
}