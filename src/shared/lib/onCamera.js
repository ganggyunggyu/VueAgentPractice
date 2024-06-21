export const createCameraElement = (element) => {
  const constraints = (window.constraints = {
    video: {
      // facingMode: true,
    },
  });
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      element.srcObject = stream;
    })
    .catch((error) => {
      console.error(error);
      alert("카메라를 불러올 수 없습니다.");
    });
};
