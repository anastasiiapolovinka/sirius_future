import { createSlice } from '@reduxjs/toolkit'

const today = new Date();
const initialState = {
  value: [
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-16).setHours(0, 0, 0, 0),
      paid: true,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-16).setHours(0, 0, 0, 0),
      paid: false,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-14).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-11).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-11).setHours(0, 0, 0, 0),
      paid: true,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-9).setHours(0, 0, 0, 0),
      paid: true,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-8).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-7).setHours(0, 0, 0, 0),
      paid: true,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-7).setHours(0, 0, 0, 0),
      paid: true,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-4).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-4).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-3).setHours(0, 0, 0, 0),
      paid: false,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-2).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).setHours(0, 0, 0, 0),
      paid: false,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()).setHours(0, 0, 0, 0),
      paid: false,
      canceled: true
    },

    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()).setHours(0, 0, 0, 0),
      paid: false,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+1).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+2).setHours(0, 0, 0, 0),
      paid: true,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+2).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+3).setHours(0, 0, 0, 0),
      paid: true,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+4).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+4).setHours(0, 0, 0, 0),
      paid: true,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+6).setHours(0, 0, 0, 0),
      paid: false,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+6).setHours(0, 0, 0, 0),
      paid: false,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+7).setHours(0, 0, 0, 0),
      paid: true,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+10).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+10).setHours(0, 0, 0, 0),
      paid: true,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+15).setHours(0, 0, 0, 0),
      paid: true,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+17).setHours(0, 0, 0, 0),
      paid: false,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+17).setHours(0, 0, 0, 0),
      paid: false,
      canceled: true
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+24).setHours(0, 0, 0, 0),
      paid: true,
      canceled: false
    },
    {
      name: 'Ментальная арифметика',
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+21).setHours(0, 0, 0, 0),
      paid: false,
      canceled: false
    },
  ], 
}

export const subjectListSlice = createSlice({
  name: 'subjectList',
  initialState,
  reducers: {},
})

export default subjectListSlice.reducer