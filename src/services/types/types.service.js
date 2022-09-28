import register from '../../register-type.js'
import { Types } from './types.class.js'
import createModel from '../../models/types.model.js'
import hooks from './types.hooks.js'

export default app => {

  let registrationListener = async (data) => {
    await register(app, data)
  }

  let unuseListener = async (data) => {
    if (app.lookup('/types/' + data?.slug)) {
      await app.unuse('/types/' + data?.slug)
    }
  }

  const options = {
    whitelist: [ '$regex', '$search' ],
    Model: createModel(app),
    paginate: app.get('paginate')
  }
  app.use('/types/any', new Types(options, app))
  const service = app.service('types/any')
  service.hooks(hooks)
  service.on('created', registrationListener)
  service.on('updated', registrationListener)
  service.on('patched', registrationListener)
  service.on('removed', unuseListener)

}