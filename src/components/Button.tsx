export const Button = (props : React.PropsWithChildren) => {
    return (
    <button className="relative  py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-r from-pink-400 to-violet-950 shadow-[0_0_0_1px_rgb(255,255,255)]">
              <div className="absolute inset-0 ">
                <div className="border border-white/15 absolute inset-0"></div>
              </div>
              <span>{props.children}</span>
    </button>
    )
}


