export default function generateSignature(paramsToSign) {
    fetch(`/api/sign-cloudinary-params`, {
      method: "POST",
      body: JSON.stringify({
        paramsToSign,
      }),
    })
      .then((r) => r.json())
      .then(({ signature }) => {
        return signature
      });
  }