import {axiosWithAuth} from '../utils/axiosWithAuth'

export const getColors = () => {
    return axiosWithAuth().get('http://localhost:5000/api/colors')
      .then(res => {
        return res.data
      })
  }