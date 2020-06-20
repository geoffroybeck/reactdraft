import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";
import Checkout from "./Checkout"

function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
    <Checkout></Checkout>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller as={Input} name="HelloWorld" control={control} defaultValue="" />
      <Controller as={InputField} name="AntdInput" control={control} defaultValue="" />
      <Controller
        as={Select}
        name="reactSelect"
        control={control}
        onChange={([selected]) => {
          // React Select return object instead of value for selection
          return { value: selected };
        }}
        defaultValue={{}}
      />

      <input type="submit" />
    </form>
    </div>
  );
}


export default App;
