import { COLORS_ENUM } from '@tiger-wallet/theme';
import { Layout } from '../../components/Layout';
import { ButtonOutline } from '../../components/ButtonOutline';

const TabTwoScreen = () => {
  return (
    <Layout>
      <ButtonOutline label="Logout" color={COLORS_ENUM.ERROR.MAIN} fullWidth />
    </Layout>
  );
};

export default TabTwoScreen;
