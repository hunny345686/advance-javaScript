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

  //   console.log(countStr);
  return strResult;
}

decodeASCII("72");
// decodeASCII("72101108108111");

// console.log(String.fromCharCode("72"));
// console.log("a".charCodeAt());

//

// Other Variation

function decode(str) {
  let result = "";
  let i = 0;

  while (i < str.length) {
    const three = Number(str.substring(i, i + 3));

    if (three >= 100 && three <= 122) {
      result += String.fromCharCode(three);

      i += 3;
    } else {
      const tow = Number(str.substring(i, i + 2));

      result += String.fromCharCode(tow);
      i += 2;
    }
    console.log(result);
  }
  return result;
}

console.log(decode("72101108108111"));
console.log(decode("658990"));
