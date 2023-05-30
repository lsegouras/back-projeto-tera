
import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value.length >= 3;
        },
        message: "O tamanho do nome deve ter pelo menos 3 caracteres.",
      },
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: "Email inválido.",
      },
    },
    // phone: {
    //   type: String,
    //   required: true,
    //   validate: {
    //     validator: function (value) {
    //       return validator.isMobilePhone(value, "pt-BR");
    //     },
    //     message: "Número de telefone inválido.",
    //   },
    // },
    // birthDate: { 
    //   type: Date, 
    //   required: true, 
    // },
    // cpfCnpj: {
    //   type: String,
    //   required: true,
    //   validate: {
    //     validator: function (value) {
    //       return value.length === 11 || value.length === 14;
    //     },
    //     message: "O tamanho do CPF/CNPJ deve ser 11 ou 14 dígitos.",
    //   },
    // },
    password: {
      type: String,
      required: true,
    },
    // cep: {
    //   type: String,
    //   required: true,
    // },
  });

export default mongoose.model("user", userSchema);