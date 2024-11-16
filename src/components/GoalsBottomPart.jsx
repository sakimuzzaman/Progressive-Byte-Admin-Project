import React from 'react';




const GoalsBottomPart = () => {

    const goals = [
        { name: 'Bill Goal', type: 'Bill', duration: '2023-05-16 to 2024-05-03', target: 'USD 302,552.00 of USD 50,000.00', progress: 53 },
        { name: 'Invoice Goal', type: 'Invoice', duration: '2023-05-16 to 2024-05-03', target: 'USD 302,552.00 of USD 50,000.00', progress: 75 },
        { name: 'Payment Goal', type: 'Payment', duration: '2023-05-16 to 2024-05-03', target: 'USD 302,552.00 of USD 50,000.00', progress: 30 },
        { name: 'Revenue Goal', type: 'Revenue', duration: '2023-05-16 to 2024-05-03', target: 'USD 302,552.00 of USD 50,000.00', progress: 62 },
    ];

    return (
        <div className="p-4 h-screen bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Goals</h2>
            <div className="space-y-4">
                {goals.map((goal, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                        <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                            <div>
                                <span className="font-semibold text-gray-800">Name</span>
                                <p>{goal.name}</p>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-800">Type</span>
                                <p>{goal.type}</p>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-800">Duration</span>
                                <p>{goal.duration}</p>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-800">Target</span>
                                <p>{goal.target}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 ">
                            <div className="w-32 h-2  bg-gray-200 rounded-full">
                                <div
                                    className={`h-full rounded-full ${goal.progress >= 50 ? 'bg-blue-500' : 'bg-red-400'}`}
                                    style={{ width: `${goal.progress}%` }}
                                ></div>
                            </div>
                            <span className="text-sm font-semibold" style={{ color: goal.progress >= 50 ? 'green' : 'red' }}>
                                {goal.progress}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GoalsBottomPart;