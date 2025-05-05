import { useRoutes } from "react-router-dom";
import App from '../App'
import TextRouter from '../page/textRouter'
import Order from '../page/order'
export default function BaseRouter(){
    return useRoutes([
        {
          path: "/",
          element: <App />,
        //   children: [
        //     {
        //       path: "messages",
        //       element: <DashboardMessages />,
        //     },
        //     { path: "tasks", element: <DashboardTasks /> },
        //   ],
        },
        { path: "textRouter", element: <TextRouter /> },
        { path: "order/:id", element: <Order /> },
      ])
}