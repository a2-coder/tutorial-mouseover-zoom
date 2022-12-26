import React from "react";

const MediumIcon = ({ className }: { className: React.SVGAttributes<SVGElement>['className'] }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3V3ZM17.3 15.94C17.2 15.89 17.15 15.74 17.15 15.639V8.006C17.15 7.906 17.2 7.756 17.3 7.655L18.255 6.55V6.5H14.84L12.28 12.978L9.366 6.5H5.852V6.55L6.755 7.806C6.956 8.006 7.006 8.308 7.006 8.559V14.082C7.056 14.384 7.006 14.735 6.856 15.036L5.5 16.894V16.944H9.116V16.894L7.76 15.087C7.61 14.785 7.559 14.484 7.61 14.133V9.11C7.66 9.21 7.71 9.21 7.76 9.411L11.174 17.044H11.224L14.54 8.76C14.49 9.06 14.49 9.412 14.49 9.664V15.589C14.49 15.739 14.44 15.839 14.34 15.94L13.335 16.894V16.944H18.256V16.894L17.302 15.94H17.3Z"
        className="fill-current"
      />
    </svg>
  );
};

export default MediumIcon;
