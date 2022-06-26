export const checkLogin = () => {
  alert("hello");
};

export const validationEmail = (value) => {
  let regexp = /.+@.+\.[A-Za-z]+$/;

  if (regexp.test(value.currentTarget.value)) {
    console.log("valid email");
    return true;
  } else {
    console.log("no valid email");
    return false;
  }
};

export const validationPass = (value) => {
  let regexp = /(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%]){2})/;

  if (regexp.test(value.currentTarget.value)) {
    console.log('valid pass');
  }else{
    console.log("no valid pass")
  }
};

