const Member = () => {
  return (
    <div className="p-4">
      <div>
        Member
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">JKT48</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
