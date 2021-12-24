
export const downloadCert = (authToken, referenceId, onComplete, onError) => {

    fetch("https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=" + referenceId, {
        headers: {
            Accept: "application/pdf",
            // authToken is a secret token i.e. to be got using confirmOTP endpoint
            Authorization: `Bearer ${authToken}`
        }
    }).then(r => {
         if (r.status === 200)
        
        r.blob().then(
        blob => {
            var newBlob = new Blob([blob], { type: "application/pdf" })

            // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }

            // For other browsers: 
            // Create a link pointing to the ObjectURL containing the blob.
            const data = window.URL.createObjectURL(newBlob);
            var link = document.createElement('a');
            link.href = data;
            link.download = "certificate-"+referenceId+".pdf";
            link.click();
            setTimeout(function () {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
            }, 100);
            if (onComplete !== undefined && onComplete && typeof (onComplete) === "function") {
                onComplete()
            }
        }
    ).catch(error => {
        if (onError !== undefined && onError && typeof (onError) === "function") {
            onError(null,null)
        }
        else {
            console.error(error)
        }
    })

    else if (r.status === 401) onError(401 , r)

    else onError(r.status,null)
}
    ).catch(error => {
        if (onError !== undefined && onError && typeof (onError) === "function") {
            onError(null,null)
        }
        else {
            console.error(error)
        }
    })

}