const GenderCheckbox = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox bg-gray-800 checkbox-primary"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox bg-gray-800 checkbox-primary"
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
