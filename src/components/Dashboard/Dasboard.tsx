import React, { useState } from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from "./styles.module.scss";
import { OutIcon } from "../../assets/icons";
import { useQuery } from "@apollo/client";
import { GET_DASHBOARD } from "../../apollo/dashboard";
import { useNavigate } from "react-router-dom";
import { MainRoute, ScreenRoute } from "../../types/Screen.routes.enum";
import { DefaultizedPieValueType } from "@mui/x-charts";
import { createDataChart } from "../../utils/utlis";
import { CustomPieChart } from "./components/CustomPieChart";
import { ItemChart, PropsPieChartEvent } from "../../utils/types";
import { Spinner } from "../Spinner";

type Props = {
  dashboard: {
    dialogs: ItemChart;
    lists: ItemChart;
    scenarios: ItemChart;
  };
};

export const Dasboard: React.FC = () => {
  const cx = useStyles(styles);
  const navigate = useNavigate();
  const [stateActiveScenarios, setStateActiveScenarios] =
    useState<PropsPieChartEvent>();
  const [stateActiveList, setStateActiveList] = useState<PropsPieChartEvent>();
  const [stateActiveDialog, setStateActiveDialog] =
    useState<PropsPieChartEvent>();
  const { data: chartsData, loading } = useQuery<Props>(GET_DASHBOARD);

  if (!chartsData) return null;

  const { result: scenarios, ourSum: scenariosSum } = createDataChart(
    chartsData.dashboard.scenarios
  );

  const { result: lists, ourSum: listSum } = createDataChart(
    chartsData.dashboard.lists
  );

  const { result: dialogs, ourSum: dialogsSum } = createDataChart(
    chartsData.dashboard.dialogs
  );

  const logOut = () => {
    localStorage.removeItem("token");
    navigate(`/${MainRoute.AUTH}/${ScreenRoute.LOGIN}`, { replace: true });
  };

  const onClickScenarios = (item: DefaultizedPieValueType) => {
    setStateActiveScenarios(item);
  };

  const onClickList = (item: DefaultizedPieValueType) => {
    setStateActiveList(item);
  };

  const onClickDialog = (item: DefaultizedPieValueType) => {
    setStateActiveDialog(item);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <p className={cx("text")}>Сводка</p>
        <div className={cx("icon")} onClick={logOut}>
          <OutIcon />
        </div>
      </div>
      <div>
        {loading ? (
          <div>
            <Spinner className={cx("spinner")} />
          </div>
        ) : (
          <div className={cx("content")}>
            <CustomPieChart
              onClick={onClickScenarios}
              onChange={setStateActiveScenarios}
              data={scenarios}
              sumChart={scenariosSum}
              sumValue={stateActiveScenarios?.value}
              activeField={stateActiveScenarios?.label}
              title="Сценарии"
            />

            <CustomPieChart
              onClick={onClickList}
              onChange={setStateActiveList}
              data={lists}
              sumChart={listSum}
              sumValue={stateActiveList?.value}
              activeField={stateActiveList?.label}
              title="Списки"
            />

            <CustomPieChart
              onClick={onClickDialog}
              onChange={setStateActiveDialog}
              data={dialogs}
              sumChart={dialogsSum}
              sumValue={stateActiveDialog?.value}
              activeField={stateActiveDialog?.label}
              title="Диалоги"
            />
          </div>
        )}
      </div>
    </div>
  );
};
