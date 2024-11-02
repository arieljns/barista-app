import axios from 'axios'


const handleOrderStatus = async (id) => {
  try {
    console.log('ini adalah id pesanan:', id)
    let res = await axios.put(`https://blendtheorybackend.onrender.com/coffee/data/${id}`)
    console.log(res)
    return res
  } catch (error) {
    console.error('you might have some error:', error)
  }
}


export default handleOrderStatus