import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'

enum EGender {
  name = 'Male',
  female = 'Female',
  undefined = 'Undefined'
}

// interface IHobby {
//   key: string
//   label: string
// }

const hobbies: string[] = ['Play football', 'Listen to music', 'Jacking', 'Swimming']
// const hobbyInstances: IHobby[] = hobbies.map((hobby, index) => ({
//   key: `hobby${index}`,
//   label: hobby
// }))
const formSchema = yup.object({
  firstName: yup.string().default(''),
  lastName: yup.string().default(''),
  email: yup.string().email().default(''),
  gender: yup.mixed<EGender>().oneOf(Object.values(EGender)).required().default(undefined),
  hobbies: yup.array().of(yup.string()).default([])
})

export type TFormModel = yup.InferType<typeof formSchema>

function MuiForm() {
  const { control, handleSubmit } = useForm<TFormModel>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: undefined,
      hobbies: []
    },
    resolver: yupResolver(formSchema)
  })

  const onSubmit = (data: TFormModel) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
        <Controller
          render={({ field }) => (
            <TextField {...field} label='First name' onChange={field.onChange} value={field.value} />
          )}
          control={control}
          name='firstName'
        />
        <Controller
          render={({ field }) => (
            <TextField {...field} label='Last name' onChange={field.onChange} value={field.value} />
          )}
          control={control}
          name='lastName'
        />
        <Controller
          render={({ field }) => (
            <TextField {...field} type='email' label='Email' onChange={field.onChange} value={field.value} />
          )}
          control={control}
          name='email'
        />
        <Controller
          render={({ field }) => (
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id={`${field.name}-select-label`}>Gender</InputLabel>
              <Select
                {...field}
                onChange={field.onChange}
                value={field.value ?? ''}
                placeholder='Select gender'
                labelId={`${field.name}-select-label`}
                label='Gender'
                id={`${field.name}`}
              >
                {Object.values(EGender).map((gender) => (
                  <MenuItem value={gender} key={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          control={control}
          name='gender'
        />
        <Controller
          render={({ field }) => (
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id={`${field.name}-select-label`}>Hobbies</InputLabel>
              <Select
                {...field}
                multiple
                onChange={field.onChange}
                value={field.value ?? []}
                placeholder='Select hobbies'
                labelId={`${field.name}-select-label`}
                label='Hobbies'
                id={`${field.name}`}
              >
                {Object.values(hobbies).map((hobby) => (
                  <MenuItem value={hobby} key={hobby}>
                    {hobby}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          control={control}
          name='hobbies'
        />
      </Stack>
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default MuiForm
