const stats = [
  {
    label: "Active Borrowers",
    value: "128",
    change: "+12 this week",
  },
  {
    label: "Tools In Use",
    value: "346",
    change: "72 due today",
  },
  {
    label: "Available Tools",
    value: "1,204",
    change: "98 newly inspected",
  },
  {
    label: "Overdue Returns",
    value: "6",
    change: "2 escalated",
  },
]

const requests = [
  {
    requester: "Alyssa Miles",
    tool: "Cordless Drill Set",
    duration: "3 days",
    status: "Approved",
    due: "Mar 12",
  },
  {
    requester: "Jamal Wright",
    tool: "Soldering Station",
    duration: "1 week",
    status: "Pending",
    due: "Mar 16",
  },
  {
    requester: "Linh Tran",
    tool: "Laser Level",
    duration: "2 days",
    status: "Ready for pickup",
    due: "Mar 10",
  },
  {
    requester: "Hannah Patel",
    tool: "Digital Multimeter",
    duration: "4 days",
    status: "Approved",
    due: "Mar 13",
  },
]

const inventory = [
  {
    name: "Hand Tools",
    count: "420",
    detail: "Hammers, wrenches, pliers",
  },
  {
    name: "Power Tools",
    count: "220",
    detail: "Drills, sanders, saws",
  },
  {
    name: "Electronics Lab",
    count: "185",
    detail: "Oscilloscopes, meters",
  },
  {
    name: "Safety Gear",
    count: "379",
    detail: "Gloves, goggles, masks",
  },
]

const returns = [
  {
    tool: "Heat Gun",
    borrower: "Omar Yusuf",
    due: "Today, 3:00 PM",
  },
  {
    tool: "Circular Saw",
    borrower: "Isabelle Cruz",
    due: "Tomorrow, 10:30 AM",
  },
  {
    tool: "Impact Driver",
    borrower: "Marcus Shaw",
    due: "Tomorrow, 1:00 PM",
  },
]

const inspections = [
  {
    item: "Safety Checklist",
    detail: "Verify PPE stock & signage",
  },
  {
    item: "Tool Condition",
    detail: "Document wear on power tools",
  },
  {
    item: "Battery Charge",
    detail: "Recharge all cordless tools",
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
              School Tool Borrowing System
            </p>
            <h1 className="text-2xl font-semibold text-white">Borrower Operations Hub</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200">
              Export Report
            </button>
            <button className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              New Borrow Request
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-6 py-10">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xs"
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-emerald-300">{stat.change}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40">
            <div className="border-b border-slate-800 px-6 py-5">
              <h2 className="text-lg font-semibold text-white">Active Requests</h2>
              <p className="text-sm text-slate-400">
                Track borrow approvals, pickups, and returns with real-time accuracy.
              </p>
            </div>
            <div className="divide-y divide-slate-800">
              {requests.map((request) => (
                <div
                  key={`${request.requester}-${request.tool}`}
                  className="grid gap-2 px-6 py-4 sm:grid-cols-[1.3fr_1fr_0.8fr_1fr]"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{request.requester}</p>
                    <p className="text-xs text-slate-400">{request.tool}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Duration</p>
                    <p className="text-sm text-slate-200">{request.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Status</p>
                    <p className="text-sm text-emerald-300">{request.status}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Due Date</p>
                    <p className="text-sm text-slate-200">{request.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="text-lg font-semibold text-white">Inventory Snapshot</h2>
              <p className="text-sm text-slate-400">
                Verified counts for the main storage zones.
              </p>
              <div className="mt-4 space-y-4">
                {inventory.map((item) => (
                  <div key={item.name} className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.detail}</p>
                    </div>
                    <p className="text-lg font-semibold text-emerald-300">{item.count}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-emerald-400/20 via-slate-900/60 to-slate-900/80 p-6">
              <h2 className="text-lg font-semibold text-white">Return Timeline</h2>
              <p className="text-sm text-slate-300">
                Upcoming handoffs with automated reminders.
              </p>
              <div className="mt-4 space-y-4">
                {returns.map((item) => (
                  <div key={item.tool} className="rounded-xl bg-slate-950/60 p-4">
                    <p className="text-sm font-semibold text-white">{item.tool}</p>
                    <p className="text-xs text-slate-300">{item.borrower}</p>
                    <p className="mt-2 text-xs text-emerald-200">{item.due}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white">Borrow Accuracy Checklist</h2>
            <p className="text-sm text-slate-400">
              Validate every request with consistent steps to avoid mistakes.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {inspections.map((inspection) => (
                <div
                  key={inspection.item}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <p className="text-sm font-semibold text-white">{inspection.item}</p>
                  <p className="text-xs text-slate-400">{inspection.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
            <p className="text-sm text-slate-400">
              Keep the workflow accurate with standard approvals.
            </p>
            <div className="mt-5 space-y-4">
              {[
                "Confirm borrower ID and course",
                "Log tool condition photos",
                "Schedule return reminder",
                "Assign inspection staff",
              ].map((action) => (
                <div
                  key={action}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3"
                >
                  <p className="text-sm text-slate-200">{action}</p>
                  <button className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-emerald-300 hover:text-emerald-200">
                    Mark done
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
