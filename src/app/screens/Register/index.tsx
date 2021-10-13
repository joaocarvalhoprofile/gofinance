import React, { useState, useEffect } from 'react'
import {
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
  Alert
} from 'react-native'

import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { InputForm } from '../../components/InputForm'
import { TypeButton } from '../../components/TypeButton'
import { Button } from '../../components/Button'
import { CategorySelectButton } from '../../components/CategorySelectButton'
import { CategoryList } from '../../features/CategoryList'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles'

interface FormData {
  title: string
  amount: string
}

const schema = Yup.object().shape({
  title: Yup.string().required('Informe uma descrição'),
  amount: Yup
    .number()
    .positive('Informe um valor positivo')
    .typeError('Informe um valor numérico')
})

export function Register() {
  const [categoryModalShow, setCategoryModalShow] = useState(false)
  const [TransactionType, SetTransactionType] = useState('')

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const navigation = useNavigation()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    SetTransactionType(type)
  }

  function handleCategoryModalShow() {
    setCategoryModalShow(true)
  }
  function handleCategoryModalClose() {
    setCategoryModalShow(false)
  }

  async function handleRegister(form: FormData) {
    if (!TransactionType) {
      return Alert.alert("Selecione um tipo de operação")
    }
    if (category.key === "category") {
      return Alert.alert("Selecione uma categoria")
    }

    const dataKey = '@gofinance:transactions'

    const newData = {
      id: String(uuid.v4()),
      title: form.title,
      amount: form.amount,
      TransactionType,
      category: category.key,
      date: new Date()
    }
    try {
      const data = await AsyncStorage.getItem(dataKey)
      const currentData = data ? JSON.parse(data) : []

      const saveData = [
        ...currentData,
        newData
      ]

      await AsyncStorage.setItem(dataKey, JSON.stringify(saveData))

      // reset form
      reset()
      SetTransactionType('')
      setCategory({
        key: 'category',
        name: 'Categoria'
      })
      navigation.navigate('Listagem')

    } catch (error) {
      console.log(error)
      Alert.alert("Não foi possível salvar")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="title"
              control={control}
              placeholder="Descrição"
              autoFocus={true}
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionTypes>
              <TypeButton
                type="up"
                title="Income"
                onPress={() => handleTransactionTypeSelect('up')}
                isActive={TransactionType === 'up'}
              />
              <TypeButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionTypeSelect('down')}
                isActive={TransactionType === 'down'}
              />
            </TransactionTypes>

            <CategorySelectButton
              title={category.name}
              onPress={handleCategoryModalShow}
            />
          </Fields>

          <Button
            title="Enviar"
            onPress={handleSubmit(handleRegister)}
          />
        </Form>

        <Modal visible={categoryModalShow}>
          <CategoryList
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCategoryModalClose}
          />
        </Modal>

      </Container>
    </TouchableWithoutFeedback>
  )
}