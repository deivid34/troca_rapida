const CreateAddsaleService = require('../../services/CreateAddsaleService');
const DeleteAddsaleService = require('../../services/DeleteAddsaleService')
const addsaleRepository = require('../../repositories/addsale.repository');
const GetAddsaleByUserService = require('../../services/GetAddsaleByUserService')
const UpdateAddsaleService = require('../../services/UpdateAddsaleService')
const GetAddsalesByUserService = require('../../services/GetAddsalesByUserService')
const UpdateImageService = require('../../services/UpdateImageService')



module.exports = {
  async createAddsale(request, response) {
    try {
      const {  price, title, description, address, image = null } = request.body;
      const { id } = request.user;

      const createAddsaleService = new CreateAddsaleService(addsaleRepository);

      const addsaleCreated = await createAddsaleService.execute({
        
        price,
        title,
        description,
        address,
        user_id: id,
        image
      });

     
return response.json({ data: addsaleCreated });
} catch (error) {
  console.error(error); // Trate o erro de alguma maneira
  return response.status(500).json({ error: 'Erro interno no servidor' });
}
 },
  

  
  async deleteAddsale(request, response) {
    const { addsaleId } = request.params
    const { id } = request.user

    const deleteAddsaleService = new DeleteAddsaleService(addsaleRepository)

    await deleteAddsaleService.execute({ id: addsaleId, user_id: id })

    return response.json({ message: 'addsale deleted' })
  },

  async getAddsaleByUser(request, response) {
    const { addsaleId } = request.params
    const { id } = request.user

    const getAddsaleByUserService = new GetAddsaleByUserService(
      addsaleRepository,
    )

    const addsale = await getAddsaleByUserService.execute({
      id: addsaleId,
      user_id: id,
    })
    return response.json({ data: addsale })
  },

  async updateAddsale(request, response) {
    const { price, title, description, address,image } = request.body;
    const { addsaleId } = request.params
    const { id } = request.user

    const updateAddsaleService = new UpdateAddsaleService(addsaleRepository)

    const addsaleUpdated = await updateAddsaleService.execute({
      id: addsaleId,
       
        price,
        title,
        description,
        address,
        user_id: id,
        image
    })
    return response.json({ data: addsaleUpdated })
  },

  async getAddsalesByUser(request, response) {
    const { id } = request.user

    const getAddsalesByUserService = new GetAddsalesByUserService(
      AddsaleRepository,
    )

    const addsales = await getAddsalesByUserService.execute({ user_id: id })

    return response.json({ data: addsales })

   
  },


  async updateImage(request, response) {
    const { file, user } = request

    const updateImage = new UpdateImageService(addsaleRepository)

    const userUpdated = await updateImage.execute({
      file,
      user,
    })

    return response.json({ data: userUpdated })
  },
  
}