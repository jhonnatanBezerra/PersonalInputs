export const utils = {


  maskCEP: (cep) => {
    cep = cep.replace(/\D/g, "");
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");

    return cep;
  },

  maskDocuments: (value) => {

    value = value.replace(/\D/g, '');
    if (value.length <= 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

  },

  maskBirthDate: (date) => {
    date = date.replace(/\D/g, "");
    date = date.replace(/^(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")

    return date;
  },

  maskPhone: (phone) => {

    phone = phone.replace(/\D/g, "");
    phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
    phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");

    return phone

  }
}


