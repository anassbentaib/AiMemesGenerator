import React from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <FormLabel htmlFor={name} fontSize="15px" fontWeight="medium" color="#f0f0f0">
        {labelName}
      </FormLabel>
      {isSurpriseMe && (
        <Button
          type="button"
          onClick={handleSurpriseMe}
          fontSize="xs"
          bg="#EcECF1"
          py={1}
          px={2}
          rounded="5px"
          color="black"
          fontWeight="semibold"
        >
          Surprise me
        </Button>
      )}
    </div>
    <Input
      type={type}
      id={name}
      name={name}
      bg="#161616"
      lineHeight= '1.5'
      border="none"
      borderRadius='none'
      color="#f1f1f1"
      size='lg'
      fontSize="16px"
      _focus={{ ring: '#009e66', outline : '1px solid #009e66' }}
      w="full"
      p={3}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
    
  </div>
);

export default FormField;
