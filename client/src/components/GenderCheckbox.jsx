const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer `}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            className="checkbox bg-gray-800 checkbox-primary"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Female</span>
          <input
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            type="checkbox"
            className="checkbox bg-gray-800 checkbox-primary"
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
