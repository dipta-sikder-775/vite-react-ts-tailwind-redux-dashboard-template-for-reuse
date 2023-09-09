import React, { SVGProps } from "react";
import { TUserType } from "./types";

export interface IGeneralProps {
  className?: string;
  style?: React.CSSProperties;
}
export interface INavBrandProps {
  logo?: string;
  name?: string;
  onClick?: () => void;
  className?: string;
  imageClassName?: string;
}

export interface INavLink {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface INavCart {
  numberOfItems: number;
  onClick: () => void;
}

export interface INavDropDown {
  children: React.ReactNode;
  title: string;
  className?: string;
  hideIndicator?: boolean;
  position?: "top" | "bottom" | "";
}
export interface ICollapsable {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen?: (isOpened: boolean) => void;
  className?: string;
}

export interface INavItem {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  withUnderline?: boolean;
}

export interface ILink {
  title: string;
  href?: string;
}

export interface INavRoutes extends ILink {
  subItems?: ILink[];
}

export interface INavRouteProps {
  navItemClassName?: string;
  navLinkClassName?: string;
  navDropDownClassName?: string;
  hideIndicator?: boolean;
  position?: "top" | "bottom";
  className?: string;
  withUnderLine?: boolean;
  routes?: INavRoutes[];
  onLinkClick?: () => void;
}

export interface INavDropdownItems extends INavRouteProps {
  title: string;
  subItems: INavRoutes[];
}

export interface ISectionDescriptionProps {
  title: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
  titleClassName?: string;
  descriptionClassName?: string;
  descriptionType?: "component" | "text";
  children?: React.ReactNode;
}

export interface INextImage {
  src: string;
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
  containerProps?: any;
  sizes?: string;
  onClick?: () => void;
  containerStyle?: React.CSSProperties;
  priority?: boolean;
  children?: React.ReactNode;
}

export interface IWithSvg extends SVGProps<SVGElement> {
  size?: number;
}

export interface PortalProps {
  containerId: string;
  children: React.ReactNode;
}




export interface IContentWithImage extends IGeneralProps {
  title: string;
  description: string;
  image: string;
  titleClassName?: string;
  descriptionClassName?: string;
  textContainerClassName?: string;
  imageClassName?: string;
  imageContainerClassName?: string;
}

export interface ISliderBreakpoints {
  [key: string]: {
    breakpoint: {
      max: number;
      min: number;
    };
    items: number;
    partialVisibilityGutter?: number;
  };
}

export default interface IArrowButton {
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface IShowCaseItem {
  image: string;
  title: string[];
  subTitle: string;
}

export interface ICarouselArrowsProps {
  onLeftButtonClick: () => void;
  onRightButtonClick: () => void;
  className?: string;
}

export interface IProductCategory {
  title: string;
  id: string | number;
  longTitle?: string;
  description?: string;
}

export interface ICategoriesFilterProps {
  filters: IProductCategory[];
  selectedFilter: IProductCategory;
  onSelectedFilterChange: (filter: IProductCategory) => void;
}

export interface IBlogpostAuthor {
  name: string;
  avatar: string;
}

export interface IBlogInfo extends IGeneralProps {
  date: Date;
  author: IBlogpostAuthor;
  readingTime: string;
  onClick?: () => void;
}
export interface IBlogPostProps extends IBlogInfo, IGeneralProps {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  href?: string;
  isScammerDetails?: boolean;
}

export interface IBlogDescription extends IGeneralProps {
  date: Date;
  readingTime: string;
  type: "blog" | "scammer";
}

export interface IBlogBlockQuote extends IGeneralProps {
  title: string;
  children: React.ReactNode;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
}

export interface ITestimonial extends IGeneralProps {
  id: string;
  userName: string;
  userAvatar: string;
  userReviewDescription: string;
  date: Date;
  containerBackground?: string;
}

export interface IBreadcrumbItem extends ILink, IGeneralProps {}

export interface IHeroSectionProps extends IGeneralProps {
  title: string;
  description?: string;
  image: string;
  breadCumbs: IBreadcrumbItem[];
  children?: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}

export interface IAboutDescriptionItem extends IGeneralProps {
  title: string;
  description: string;
  image: string;
  onLearnMoreClick?: () => void;
}

export interface ISection extends IGeneralProps {
  children: React.ReactNode;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
}

export interface IAboutDetails extends IGeneralProps {
  title: string;
  children?: React.ReactNode;
}

export interface IDropdownItem extends IGeneralProps {
  label: string;
  value?: string | number;
}

export interface IDropDownItemProps extends IGeneralProps {
  onSelect?: (value: IDropdownItem) => void;
  items: IDropdownItem[];
  type?: "left" | "right";
  dropdownClassName?: string;
  dropdownStyle?: React.CSSProperties;
  label?: string | React.ReactNode;
  dropdownItemClassName?: string;
  dropdownBtnClassName?: string;
  value?: IDropdownItem;
}

export interface IPricingItem extends IGeneralProps {
  title: string;
  titleClassName?: string;
  iconClassName?: string;
}

export interface IContactInfoCard extends IGeneralProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  items: string[];
  iconBackgroundColor?: string;
}

export interface IBlockTag extends IGeneralProps {
  id?: string;
  title: string;
  onClick?: () => void;
}

export interface IStarProps extends IGeneralProps {
  state?: "full" | "half" | "empty";
  size?: number;
  color?: string;
  onClick?: () => void;
}

export interface IStar extends IGeneralProps {
  ratings: number;
  starClassName?: string;
  starProps?: any;
}

export interface IProductTableRow extends IGeneralProps {
  title: string;
  value: string;
}

export interface IWorkCard extends IGeneralProps {
  id?: number;
  image?: string;
  title: string;
  description: string;
  type: TUserType;
}

export interface IModal extends IGeneralProps {
  children?: any;
  onClose: () => void;
  isOpen: boolean;
}

export interface IProductButtonsProps extends IGeneralProps {
  leftButtonTitle: string;
  rightButtonTitle: string;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
  leftButtonClassName?: string;
  rightButtonClassName?: string;
}

export interface IModalBodyProps extends IGeneralProps {
  children?: React.ReactNode;
}

export interface IModalHeaderProps extends IGeneralProps {
  title?: string;
  titleClassName?: string;
  onClose: () => void;
}
