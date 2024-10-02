export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg z-10 relative">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          IdeaHub
        </a>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
