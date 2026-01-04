export const getPasswrodErrors = (password) => {
    const errors = []
    if (password.length == 0) {
        errors.push("Password can not be empty")
    }

    if (password.includes(' ')) {
        errors.push("Password can not contain ' '")
    }

    if (password.length < 8) {
        errors.push("Password should be more than 8 chars")
    }

    const upperCaseRegEx = new RegExp('[A-Z]')
    if (upperCaseRegEx.test(password) == false) {
        errors.push("Password should contain 1 upper case letter")
    }

    if (/[a-z]/.test(password) == false) {
        errors.push("Password should contain 1 lower case letter")
    }

    if (/[0-9]/.test(password) == false) {
        errors.push("Password should contain 1 digit")
    }

    if (/[!@?#%^&*]/.test(password) == false) {
        errors.push("Password should contain 1 special character")
    }

    return errors;
}

export const getEmailErrors = (email) => {
    const errors = []

    // ^ -- begin of row
    // $ -- end of row
    //    email          @  gmail   .  com
    if (/^[+a-zA-Z0-9\.]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(email) === false) {
        errors.push('Email has wrong format')
    }

    return errors
}