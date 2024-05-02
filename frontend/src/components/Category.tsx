import React from "react";

export type CategoryType = {
  id: number;
  name: string;
};

export type CategoryProps = CategoryType & {
  onClick: () => void;
};

const Category = (props: CategoryProps): React.ReactNode => {
  return (
    <div>
      <a
        href={`/categories/${props.id}`}
        onClick={props.onClick}
        className="category-navigation-link"
      >
        {props.name}
      </a>{" "}
    </div>
  );
};

export default Category;
