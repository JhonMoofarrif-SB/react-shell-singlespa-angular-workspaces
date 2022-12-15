import { environment } from '../../environments/environment';

export const mockCreateAccount = {
  ProfileListItems: [
    {
      key: '0',
      label: 'Administrador',
      path: environment.JELPIT_URL_RECAUDO_CREATE_ADMIN,
      firstIcon: 'assets/users.png',
      secondIcon: 'assets/caret-right.svg',
    },
    {
      key: '1',
      label: 'Residente',
      path: environment.JELPIT_URL_RECAUDO_CREATE_RESIDENTE,
      firstIcon: 'assets/user.png',
      secondIcon: 'assets/caret-right.svg',
    },
  ],
  title: 'Crea tu cuenta',
  subtitle: 'Elige tu perfil',
  footerQuestion: '¿Ya estás registrado?',
  titleFooterUrl: 'Inicia sesión',
  footerUrl: '/',
  imgLogo: 'assets/logo_jelpit.svg',
};
