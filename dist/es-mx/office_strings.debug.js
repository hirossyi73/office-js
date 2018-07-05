/* Version: 16.0.10702.10000 */

Type.registerNamespace("Strings");
Strings.OfficeOM = function()
{
};
Strings.OfficeOM.registerClass("Strings.OfficeOM");
Strings.OfficeOM.L_APICallFailed = "Error de llamada a la API";
Strings.OfficeOM.L_APINotSupported = "API no compatible";
Strings.OfficeOM.L_ActivityLimitReached = "Se alcanzó el límite de actividad.";
Strings.OfficeOM.L_AddBindingFromPromptDefaultText = "Haz una selección.";
Strings.OfficeOM.L_AddinIsAlreadyRequestingToken = "El complemento ya está solicitando un token de acceso.";
Strings.OfficeOM.L_AddinIsAlreadyRequestingTokenMessage = "La operación falló porque este complemento ya está solicitando un token de acceso.";
Strings.OfficeOM.L_ApiNotFoundDetails = "El método o la propiedad {0} forman parte del conjunto de requisitos {1}, que no está disponible en tu versión de {2}.";
Strings.OfficeOM.L_AppNameNotExist = "El nombre del complemento para {0} no existe.";
Strings.OfficeOM.L_AppNotExistInitializeNotCalled = "La aplicación {0} no existe. No se llamó a Microsoft.Office.WebExtension.initialize(reason).";
Strings.OfficeOM.L_AttemptingToSetReadOnlyProperty = 'Intentar establecer la propiedad de solo lectura "{0}".';
Strings.OfficeOM.L_BadSelectorString = "El formato de la cadena pasado al selector es incorrecto o no se admite.";
Strings.OfficeOM.L_BindingCreationError = "No se pudo crear el enlace";
Strings.OfficeOM.L_BindingNotExist = "El enlace especificado no existe.";
Strings.OfficeOM.L_BindingToMultipleSelection = "No se admiten las selecciones discontinuas.";
Strings.OfficeOM.L_BrowserAPINotSupported = "Este navegador no es compatible con la API solicitada.";
Strings.OfficeOM.L_CallbackNotAFunction = "La devolución de llamada debe ser de tipo función. Era de tipo {0}."
Strings.OfficeOM.L_CannotApplyPropertyThroughSetMethod = 'Los cambios en la propiedad "{0}" no se pueden aplicar a través de un método "object.set".';
Strings.OfficeOM.L_CannotNavigateTo = "El objeto se encuentra en una ubicación donde no se admite la navegación.";
Strings.OfficeOM.L_CannotRegisterEvent = "No se puede registrar el controlador de eventos.";
Strings.OfficeOM.L_CannotWriteToSelection = "No se puede escribir en la selección actual.";
Strings.OfficeOM.L_CellDataAmountBeyondLimits = "Nota: Se recomienda que el número de celdas de una tabla sea inferior a 20.000.";
Strings.OfficeOM.L_CellFormatAmountBeyondLimits = "Nota: Se recomienda que la serie de formatos establecida mediante una llamada API de formato sea inferior a 100.";
Strings.OfficeOM.L_CloseFileBeforeRetrieve = "Llamar a closeAsync en el archivo actual antes de recuperar de otro.";
Strings.OfficeOM.L_CoercionTypeNotMatchBinding = "El tipo de conversión especificado no es compatible con este tipo de enlace.";
Strings.OfficeOM.L_CoercionTypeNotSupported = "No se admite el tipo de conversión especificado.";
Strings.OfficeOM.L_ColIndexOutOfRange = "El valor de índice de la columna está fuera del intervalo permitido. Usa un valor (0 o superior) que sea menor que el número de columnas.";
Strings.OfficeOM.L_ConnectionFailureWithDetails = "Error en la solicitud; código de estado {0}; código de error {1}; mensaje de error: {2}";
Strings.OfficeOM.L_ConnectionFailureWithStatus = "Error en la solicitud; código de estado: {0}.";
Strings.OfficeOM.L_CustomFunctionDefinitionMissing = "Debe existir una propiedad con este nombre que represente la definición de la función en Excel.Script.CustomFunctions.";
Strings.OfficeOM.L_CustomFunctionImplementationMissing = 'La propiedad con este nombre en Excel.Script.CustomFunctions que representa la definición de la función debe contener una propiedad "call" que implemente la función.';
Strings.OfficeOM.L_CustomFunctionNameCannotSplit = "El nombre de la función debe contener un espacio de nombres no vacío y un nombre corto no vacío.";
Strings.OfficeOM.L_CustomFunctionNameContainsBadChars = "El nombre de función solo puede contener letras, números, guiones bajos y puntos.";
Strings.OfficeOM.L_CustomXmlError = "Error de XML personalizado.";
Strings.OfficeOM.L_CustomXmlExceedQuotaMessage = "XPath limita la selección a 1024 elementos.";
Strings.OfficeOM.L_CustomXmlExceedQuotaName = "Se alcanzó el límite de selección";
Strings.OfficeOM.L_CustomXmlNodeNotFound = "No se encontró el nodo especificado.";
Strings.OfficeOM.L_CustomXmlOutOfDateMessage = "Los datos no están actualizados. Recupera el objeto de nuevo.";
Strings.OfficeOM.L_CustomXmlOutOfDateName = "Datos obsoletos";
Strings.OfficeOM.L_DataNotMatchBindingSize = "El objeto de datos proporcionado no coincide con el tamaño de la selección actual.";
Strings.OfficeOM.L_DataNotMatchBindingType = "El objeto de datos especificado no es compatible con el tipo de enlace.";
Strings.OfficeOM.L_DataNotMatchCoercionType = "El tipo de objeto de datos especificado no es compatible con la selección actual.";
Strings.OfficeOM.L_DataNotMatchSelection = "El objeto de datos proporcionado no es compatible con la forma o las dimensiones de la selección actual.";
Strings.OfficeOM.L_DataReadError = "Error de lectura de datos";
Strings.OfficeOM.L_DataStale = "Datos obsoletos";
Strings.OfficeOM.L_DataWriteError = "Error de escritura de datos";
Strings.OfficeOM.L_DataWriteReminder = "Aviso de escritura de datos";
Strings.OfficeOM.L_DialogAddressNotTrusted = "El dominio de la URL no está incluido en el elemento AppDomains en el manifiesto.";
Strings.OfficeOM.L_DialogAlreadyOpened = "No se pudo realizar la operación porque este complemento ya tiene un diálogo activo.";
Strings.OfficeOM.L_DialogInvalidScheme = "No se admite el esquema de dirección URL. Use HTTPS en su lugar.";
Strings.OfficeOM.L_DialogNavigateError = "Error de navegación por diálogo";
Strings.OfficeOM.L_DialogOK = "Aceptar";
Strings.OfficeOM.L_DialogRequireHTTPS = "No se admite el protocolo HTTP. Utilizar HTTPS en su lugar";
Strings.OfficeOM.L_DisplayDialogError = "Error de presentación del diálogo";
Strings.OfficeOM.L_DocumentReadOnly = "La operación solicitada no se permite en el modo de documento actual.";
Strings.OfficeOM.L_ElementMissing = "No pudimos dar formato a la celda de la tabla porque faltan algunos valores de parámetro. Comprueba los parámetros y vuelve a intentarlo.";
Strings.OfficeOM.L_EventHandlerAdditionFailed = "No se pudo agregar el controlador de eventos.";
Strings.OfficeOM.L_EventHandlerNotExist = "No se encontró el controlador de eventos especificado para este enlace.";
Strings.OfficeOM.L_EventHandlerRemovalFailed = "No se pudo quitar el controlador de eventos.";
Strings.OfficeOM.L_EventRegistrationError = "Error de registro de eventos";
Strings.OfficeOM.L_FileTypeNotSupported = "El tipo de archivo especificado no es compatible.";
Strings.OfficeOM.L_FormatValueOutOfRange = "El valor está fuera del intervalo permitido.";
Strings.OfficeOM.L_FormattingReminder = "Aviso de formato";
Strings.OfficeOM.L_FunctionCallFailed = "No se pudo llamar a la función {0}. Código de error: {1}.";
Strings.OfficeOM.L_GetDataIsTooLarge = "El conjunto de datos solicitado es demasiado grande.";
Strings.OfficeOM.L_GetDataParametersConflict = "Hay un conflicto en los parámetros especificados.";
Strings.OfficeOM.L_GetSelectionNotSupported = "No se admite la selección actual.";
Strings.OfficeOM.L_HostError = "Error de host";
Strings.OfficeOM.L_InValidOptionalArgument = "argumento opcional no válido";
Strings.OfficeOM.L_IndexOutOfRange = "Índice fuera del intervalo.";
Strings.OfficeOM.L_InitializeNotReady = "Office.js no se cargó todavía por completo. Inténtalo de nuevo más tarde o asegúrate de agregar el código de inicialización en la función Office.initialize.";
Strings.OfficeOM.L_InternalError = "Error interno";
Strings.OfficeOM.L_InternalErrorDescription = "Error interno.";
Strings.OfficeOM.L_InvalidAPICall = "Llamada de API no válida";
Strings.OfficeOM.L_InvalidApiArgumentsMessage = "Los argumentos de entrada no son válidos.";
Strings.OfficeOM.L_InvalidApiCallInContext = "La llamada a API no es válida en el contexto actual.";
Strings.OfficeOM.L_InvalidArgument = 'El argumento "{0}" no funciona en esta situación, falta o no tiene el formato correcto.';
Strings.OfficeOM.L_InvalidArgumentGeneric = "Los argumentos pasados a la función no funcionan en esta situación, faltan o no están en el formato correcto.";
Strings.OfficeOM.L_InvalidBinding = "Enlace no válido";
Strings.OfficeOM.L_InvalidBindingError = "Error de enlace no válido";
Strings.OfficeOM.L_InvalidBindingOperation = "Operación de enlace no válido";
Strings.OfficeOM.L_InvalidCellsValue = "Uno o más de los parámetros de las celdas tienen valores que no están permitidos. Comprueba los valores y vuelve a intentarlo.";
Strings.OfficeOM.L_InvalidCoercion = "Tipo de conversión no válido";
Strings.OfficeOM.L_InvalidColumnsForBinding = "Las columnas especificadas no son válidas.";
Strings.OfficeOM.L_InvalidDataFormat = "El formato del objeto de datos especificado no es válido.";
Strings.OfficeOM.L_InvalidDataObject = "Objeto de datos no válido";
Strings.OfficeOM.L_InvalidFormat = "Error de formato no válido";
Strings.OfficeOM.L_InvalidFormatValue = "Uno o más de los parámetros de formato tienen valores que no están permitidos. Comprueba los valores y vuelve a intentarlo.";
Strings.OfficeOM.L_InvalidGetColumns = "Las columnas especificadas no son válidas.";
Strings.OfficeOM.L_InvalidGetRowColumnCounts = "Los valores de rowCount o columnCount especificados no son válidos.";
Strings.OfficeOM.L_InvalidGetRows = "Las filas especificadas no son válidas.";
Strings.OfficeOM.L_InvalidGetStartRowColumn = "Los valores de startRow o startColumn especificados no son válidos.";
Strings.OfficeOM.L_InvalidGrant = "Falta la autorización previa.";
Strings.OfficeOM.L_InvalidGrantMessage = "Falta conceder permisos para este complemento.";
Strings.OfficeOM.L_InvalidNamedItemForBindingType = "El tipo de enlace especificado no es compatible con el elemento con nombre suministrado.";
Strings.OfficeOM.L_InvalidNode = "Nodo no válido";
Strings.OfficeOM.L_InvalidObjectPath = 'La ruta del objeto "{0}" no funciona para lo que estás intentando hacer. Si estás usando el objeto en varias llamadas de "context.sync" y fuera de la ejecución secuencial de un lote ".run", usa los métodos "context.trackedObjects.add()" y "context.trackedObjects.remove()" para administrar la duración de objeto.';
Strings.OfficeOM.L_InvalidOperationInCellEditMode = "Excel está en modo de edición de celdas. Sal del modo de edición pulsando Entrar o Tab o seleccionando otra celda y después vuelve a intentarlo.";
Strings.OfficeOM.L_InvalidOrTimedOutSession = "Sesión caducada o no válida";
Strings.OfficeOM.L_InvalidOrTimedOutSessionMessage = "La sesión de Office Online expiró o no es válida. Para continuar, actualiza la página.";
Strings.OfficeOM.L_InvalidParameters = "La función {0} contiene parámetros no válidos.";
Strings.OfficeOM.L_InvalidReadForBlankRow = "La fila especificada está en blanco.";
Strings.OfficeOM.L_InvalidRequestContext = "No puede usar el objeto en distintos contextos de solicitudes.";
Strings.OfficeOM.L_InvalidResourceUrl = "La URL de recursos de aplicación que se proporcionó no es válida.";
Strings.OfficeOM.L_InvalidResourceUrlMessage = "La URL de recursos que se especificó en el manifiesto no es válida.";
Strings.OfficeOM.L_InvalidSSOAddinMessage = "No se admite la API de identidad para este complemento.";
Strings.OfficeOM.L_InvalidSelectionForBindingType = "No se puede crear un enlace con la selección actual y el tipo de enlace especificado.";
Strings.OfficeOM.L_InvalidSetColumns = "Las columnas especificadas no son válidas.";
Strings.OfficeOM.L_InvalidSetRows = "Las filas especificadas no son válidas.";
Strings.OfficeOM.L_InvalidSetStartRowColumn = "Los valores de startRow o startColumn especificados no son válidos.";
Strings.OfficeOM.L_InvalidTableOptionValue = "Uno o más de los parámetros de tableOptions tienen valores que no están permitidos. Comprueba los valores y vuelve a intentarlo.";
Strings.OfficeOM.L_InvalidValue = "Valor no válido";
Strings.OfficeOM.L_MemoryLimit = "Límite de memoria superado";
Strings.OfficeOM.L_MissingParameter = "Parámetro ausente";
Strings.OfficeOM.L_MissingRequiredArguments = "Faltan algunos argumentos necesarios";
Strings.OfficeOM.L_MultipleNamedItemFound = "Se encontraron varios objetos con el mismo nombre.";
Strings.OfficeOM.L_NamedItemNotFound = "El elemento con nombre no existe.";
Strings.OfficeOM.L_NavOutOfBound = "No se pudo realizar la operación porque el índice está fuera del intervalo.";
Strings.OfficeOM.L_NetworkProblem = "Problema en la red";
Strings.OfficeOM.L_NetworkProblemRetrieveFile = "Un problema de red impidió la recuperación del archivo.";
Strings.OfficeOM.L_NewWindowCrossZone = 'No pudimos crear un cuadro de diálogo a causa de la configuración de seguridad de tu navegador. Prueba otro navegador o {0} para que "{1}" y el dominio que se muestra en tu barra de direcciones se encuentren en la misma zona de seguridad.';
Strings.OfficeOM.L_NewWindowCrossZoneConfigureBrowserLink = "configurar el navegador";
Strings.OfficeOM.L_NewWindowCrossZoneErrorString = "No pudimos crear el cuadro de diálogo a causa de las restricciones del navegador. El dominio del cuadro de diálogo y el dominio del host del complemento no se encuentran en la misma zona de seguridad.";
Strings.OfficeOM.L_NoCapability = "No dispones de permisos suficientes para esta acción.";
Strings.OfficeOM.L_NonUniformPartialGetNotSupported = "No se pueden usar parámetros de coordenadas con el tipo de coerción Tabla cuando la tabla contiene celdas combinadas.";
Strings.OfficeOM.L_NonUniformPartialSetNotSupported = "No se pueden usar parámetros de coordenadas con el tipo de coerción Tabla cuando la tabla contiene celdas combinadas.";
Strings.OfficeOM.L_NotImplemented = "La función {0} no está implementada.";
Strings.OfficeOM.L_NotSupported = "No se admite la función {0}.";
Strings.OfficeOM.L_NotSupportedBindingType = "No se admite el tipo de enlace especificado {0}.";
Strings.OfficeOM.L_NotSupportedEventType = "No se admite el tipo de evento especificado {0}.";
Strings.OfficeOM.L_OperationCancelledError = "Operación cancelada";
Strings.OfficeOM.L_OperationCancelledErrorMessage = "El usuario canceló la operación.";
Strings.OfficeOM.L_OperationNotSupported = "No se admite esta operación.";
Strings.OfficeOM.L_OperationNotSupportedOnMatrixData = "El contenido seleccionado tiene que estar en formato de tabla. Da formato de tabla a los datos y vuelve a intentarlo.";
Strings.OfficeOM.L_OperationNotSupportedOnThisBindingType = "La operación no es compatible con este tipo de enlace.";
Strings.OfficeOM.L_OsfControlTypeNotSupported = "No se admite el tipo OsfControl.";
Strings.OfficeOM.L_OutOfRange = "Fuera del intervalo";
Strings.OfficeOM.L_OverwriteWorksheetData = "La operación establecida no se pudo realizar porque el objeto de datos proporcionado sobrescribirá o cambiará los datos.";
Strings.OfficeOM.L_PermissionDenied = "Permiso denegado";
Strings.OfficeOM.L_PropertyDoesNotExist = 'Propiedad "{0}" no existe en el objeto.';
Strings.OfficeOM.L_PropertyNotLoaded = 'La propiedad "{0}" no está disponible. Antes de leer el valor de la propiedad, llama al método de carga en el objeto contenedor y llama a "context.sync()" en el contexto de solicitud asociado.';
Strings.OfficeOM.L_ReadSettingsError = "Error de configuración de lectura";
Strings.OfficeOM.L_RedundantCallbackSpecification = "La devolución de llamada no se puede especificar en la lista de argumentos y en el objeto opcional a la vez.";
Strings.OfficeOM.L_RequestTimeout = "La llamada tardó demasiado tiempo en ejecutarse.";
Strings.OfficeOM.L_RequestTokenUnavailable = "Esta API se limitó para reducir la frecuencia de llamada.";
Strings.OfficeOM.L_RowIndexOutOfRange = "El valor de índice de la fila está fuera del intervalo permitido. Usa un valor (0 o superior) que sea menor que el número de filas.";
Strings.OfficeOM.L_RunMustReturnPromise = 'La función por lotes que se pasa al método ".run" no devolvió una promesa. La función debe devolver una promesa para que puedan liberarse los objetos con seguimiento automático al completarse la operación por lotes. Normalmente, devuelve una promesa al devolver la respuesta de "context.sync()".';
Strings.OfficeOM.L_SSOClientError = "Se produjo un error en la solicitud de autenticación de Office.";
Strings.OfficeOM.L_SSOClientErrorMessage = "Se produjo un error inesperado en el cliente.";
Strings.OfficeOM.L_SSOConnectionLostError = "Se perdió una conexión durante el proceso de inicio de sesión.";
Strings.OfficeOM.L_SSOConnectionLostErrorMessage = "Se perdió una conexión durante el proceso de inicio de sesión y es posible que el usuario no la pueda iniciar. Esto se debió probablemente a los valores de la configuración de explorador del usuario, como las zonas de seguridad.";
Strings.OfficeOM.L_SSOServerError = "Se produjo un error en el proveedor de autenticación.";
Strings.OfficeOM.L_SSOServerErrorMessage = "Se produjo un error inesperado en el servidor.";
Strings.OfficeOM.L_SSOUserConsentNotSupportedByCurrentAddinCategory = "Este complemento no admite el consentimiento del usuario.";
Strings.OfficeOM.L_SSOUserConsentNotSupportedByCurrentAddinCategoryMessage = "Se produjo un error en la operación porque el complemento no admite el consentimiento del usuario en esta categoría";
Strings.OfficeOM.L_SaveSettingsError = "Error de configuración de guardado";
Strings.OfficeOM.L_SelectionCannotBound = "No se puede enlazar a la selección actual.";
Strings.OfficeOM.L_SelectionNotSupportCoercionType = "La selección actual no es compatible con el tipo de conversión especificado.";
Strings.OfficeOM.L_SetDataIsTooLarge = "El objeto de datos especificado es demasiado grande.";
Strings.OfficeOM.L_SetDataParametersConflict = "Hay un conflicto en los parámetros especificados.";
Strings.OfficeOM.L_SettingNameNotExist = "El nombre de configuración especificado no existe.";
Strings.OfficeOM.L_SettingsAreStale = "No se pudo guardar la configuración porque no está actualizada.";
Strings.OfficeOM.L_SettingsCannotSave = "No se pudo guardar la configuración.";
Strings.OfficeOM.L_SettingsStaleError = "Error de configuración obsoleto";
Strings.OfficeOM.L_ShowWindowDialogNotification = "{0} desea mostrar una nueva ventana.";
Strings.OfficeOM.L_ShowWindowDialogNotificationAllow = "Permitir";
Strings.OfficeOM.L_ShowWindowDialogNotificationIgnore = "Ignorar";
Strings.OfficeOM.L_ShuttingDown = "Hubo un problema con la operación porque los datos no son actuales en el servidor.";
Strings.OfficeOM.L_SliceSizeNotSupported = "No se admite el tamaño de segmento especificado.";
Strings.OfficeOM.L_SpecifiedIdNotExist = "El identificador especificado no existe.";
Strings.OfficeOM.L_Timeout = "Se superó el tiempo de espera de la operación.";
Strings.OfficeOM.L_TooManyArguments = "hay demasiados argumentos";
Strings.OfficeOM.L_TooManyIncompleteRequests = "Espera a que finalice la llamada anterior.";
Strings.OfficeOM.L_TooManyOptionalFunction = "existen varias funciones opcionales en la lista de parámetros";
Strings.OfficeOM.L_TooManyOptionalObjects = "existen varios objetos opcionales en la lista de parámetros";
Strings.OfficeOM.L_UnknownBindingType = "El tipo de enlace no es compatible.";
Strings.OfficeOM.L_UnsupportedDataObject = "No se admite el tipo de objeto de datos proporcionado.";
Strings.OfficeOM.L_UnsupportedEnumeration = "Enumeración no compatible";
Strings.OfficeOM.L_UnsupportedEnumerationMessage = "La enumeración no se admite la aplicación host actual.";
Strings.OfficeOM.L_UnsupportedUserIdentity = "No se admite el tipo de identidad del usuario.";
Strings.OfficeOM.L_UnsupportedUserIdentityMessage = "No se admite el tipo de identidad del usuario.";
Strings.OfficeOM.L_UserAborted = "El usuario anuló la solicitud aceptada.";
Strings.OfficeOM.L_UserAbortedMessage = "El usuario no aceptó los permisos del complemento.";
Strings.OfficeOM.L_UserClickIgnore = "El usuario decidió ignorar el cuadro de diálogo.";
Strings.OfficeOM.L_UserNotSignedIn = "Ningún usuario inició sesión en Office.";
Strings.OfficeOM.L_ValueNotLoaded = 'El valor del objeto de resultado aún no se carga. Antes de leer la propiedad del valor, llama a "context.sync()" en el contexto de solicitud asociado.';