function decodeASCII(str) {
  let strResult = "";
  let countStr = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (countStr.length === 1) {
      console.log(/n/);
    }
    countStr += countStr[i];

    // if (Number(countStr) > 65) {
    //   console.log(countStr);
    //   countStr = "";
    //   countStr = str[i];
    //   //   String.fromCharCode("72");
    // } else {
    //   countStr += str;
    // }
  }

  console.log(countStr);
  return strResult;
}

decodeASCII("72");
// decodeASCII("72101108108111");

// console.log(String.fromCharCode("72"));
// console.log("a".charCodeAt());
