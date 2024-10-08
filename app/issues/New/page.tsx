'use client';
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const[error, setError ]=useState('');
  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form className=' space-y-3'
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post('/api/issues', data);
          router.push('/issues');
        } catch (error) {
          setError('An unexpected error occured');
        }

      })}>
      <TextField.Root placeholder='Title' {...register('title')}>
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <TextArea placeholder='Description' {...field} />}
      />

      <Button>Submit New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssuePage