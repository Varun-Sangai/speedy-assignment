import {Typography} from "@mui/material";
import { twMerge } from "tailwind-merge";
import CustomBox from "../../shared/CustomBox";
import { DashboardCardProps } from "../../../types/common";

const DashboardCard = ({
  title,
  wrapperClassName,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: DashboardCardProps) => {
  return (
    <CustomBox className={twMerge("p-4 lg:px-6 lg:pt-4",wrapperClassName)}>
      {cardheading ? (
        <div>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {title ? (
            <div className="flex gap-4 justify-between flex-wrap items-center">
              <div>
                {title ? <Typography variant="h5">{title}</Typography> : ""}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ""
                )}
              </div>
              {action}
            </div>
          ) : null}

          {children}
        </div>
      )}

      {middlecontent}
      {footer}
    </CustomBox>
  );
};

export default DashboardCard;
