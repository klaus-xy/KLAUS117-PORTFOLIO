export interface IconTemplateProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  fill?: string;
  children?: React.ReactNode;
}

const IconTemplate = ({
  width = "24",
  height = "24",
  fill = "currentColor",
  children,
  ...props
}: IconTemplateProps) => {
  return (
    <svg width={width} height={height} fill={fill} {...props}>
      {children}
    </svg>
  );
};

export default IconTemplate;
