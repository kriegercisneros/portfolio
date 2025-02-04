/* eslint-disable @typescript-eslint/no-explicit-any */
// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // // // // import React, { useState } from 'react';
// // // // // import { Database, Smartphone, Activity, Users } from 'lucide-react';

// // // // // interface Service {
// // // // //   id: string;
// // // // //   title: string;
// // // // //   desc: string;
// // // // //   icon: React.ElementType;
// // // // //   connections: string[];
// // // // // }

// // // // // const SystemArchitecture = () => {
// // // // //   const [activeService, setActiveService] = useState<Service | null>(null);

// // // // //   const services: Service[] = [
// // // // //     {
// // // // //       id: 'dashboard',
// // // // //       title: 'Risk Management Dashboard',
// // // // //       desc: 'Central hub providing real-time risk analytics and notifications',
// // // // //       icon: Activity,
// // // // //       connections: ['mobile', 'analytics', 'insurance']
// // // // //     },
// // // // //     {
// // // // //       id: 'mobile',
// // // // //       title: 'Driver Onboarding App',
// // // // //       desc: 'Mobile-first solution for streamlined driver management',
// // // // //       icon: Smartphone,
// // // // //       connections: ['dashboard']
// // // // //     },
// // // // //     {
// // // // //       id: 'analytics',
// // // // //       title: 'Analytics Engine',
// // // // //       desc: 'AI/ML powered insights from integrated data sources',
// // // // //       icon: Database,
// // // // //       connections: ['dashboard']
// // // // //     },
// // // // //     {
// // // // //       id: 'insurance',
// // // // //       title: 'Commercial Insurance App',
// // // // //       desc: 'Core business data collection and management',
// // // // //       icon: Users,
// // // // //       connections: ['dashboard', 'analytics']
// // // // //     }
// // // // //   ];

// // // // //   const renderConnections = (service: Service) => {
// // // // //     if (!activeService) return null;
// // // // //     if (activeService.connections.includes(service.id) || 
// // // // //         service.connections.includes(activeService.id)) {
// // // // //       return (
// // // // //         <div className="absolute inset-0 border-2 border-blue-500 rounded-lg" />
// // // // //       );
// // // // //     }
// // // // //     return null;
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-8 bg-gray-50 rounded-lg">
// // // // //       <h2 className="text-2xl font-bold mb-8 text-gray-800">System Architecture</h2>
// // // // //       <div className="grid grid-cols-2 gap-8">
// // // // //         {services.map((service) => (
// // // // //           <div
// // // // //             key={service.id}
// // // // //             className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
// // // // //             onMouseEnter={() => setActiveService(service)}
// // // // //             onMouseLeave={() => setActiveService(null)}
// // // // //           >
// // // // //             {renderConnections(service)}
// // // // //             <div className="flex items-center space-x-4">
// // // // //               <service.icon className="w-8 h-8 text-blue-500" />
// // // // //               <div>
// // // // //                 <h3 className="font-semibold text-lg text-gray-800">{service.title}</h3>
// // // // //                 <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div className="mt-8 text-sm text-gray-600">
// // // // //         Hover over services to see their connections
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SystemArchitecture;

// // // // import React from 'react';
// // // // import ReactFlow, { 
// // // //   Background,
// // // //   Controls,
// // // //   MiniMap,
// // // //   useNodesState,
// // // //   useEdgesState,
// // // //   MarkerType,
// // // //   Node,
// // // //   NodeProps
// // // // } from 'reactflow';
// // // // import 'reactflow/dist/style.css';

// // // // interface CustomNodeData {
// // // //   label: string;
// // // //   description: string;
// // // //   icon: React.ElementType;
// // // // }

// // // // interface CustomNodeProps extends NodeProps {
// // // //   data: CustomNodeData;
// // // // }

// // // // const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
// // // //   const IconComponent = data.icon;
  
// // // //   return (
// // // //     <div className="px-4 py-2 shadow-lg rounded-md bg-white border-2 border-gray-200">
// // // //       <div className="flex items-center">
// // // //         <div className="w-8 h-8 text-blue-500 mr-2">
// // // //           <IconComponent />
// // // //         </div>
// // // //         <div>
// // // //           <div className="text-lg font-bold">{data.label}</div>
// // // //           <div className="text-sm text-gray-500">{data.description}</div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const nodeTypes = {
// // // //   custom: CustomNode,
// // // // };

// // // // const SystemFlow = () => {
// // // //   const [nodes, setNodes, onNodesChange] = useNodesState([]);
// // // //   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

// // // //   // Define initial elements
// // // //   React.useEffect(() => {
// // // //     const initialNodes: Node<CustomNodeData>[] = [
// // // //       {
// // // //         id: 'driver-app',
// // // //         type: 'custom',
// // // //         position: { x: 0, y: 0 },
// // // //         data: { 
// // // //           label: 'Driver Onboarding',
// // // //           description: 'Mobile-first compliance',
// // // //           icon: () => <span>📱</span>
// // // //         }
// // // //       },
// // // //       {
// // // //         id: 'data-lake',
// // // //         type: 'custom',
// // // //         position: { x: 250, y: 100 },
// // // //         data: { 
// // // //           label: 'Data Lake',
// // // //           description: 'Centralized repository',
// // // //           icon: () => <span>💾</span>
// // // //         }
// // // //       },
// // // //       {
// // // //         id: 'risk-dashboard',
// // // //         type: 'custom',
// // // //         position: { x: 500, y: 0 },
// // // //         data: { 
// // // //           label: 'Risk Dashboard',
// // // //           description: 'Real-time analytics',
// // // //           icon: () => <span>📊</span>
// // // //         }
// // // //       },
// // // //       {
// // // //         id: 'insurance-app',
// // // //         type: 'custom',
// // // //         position: { x: 0, y: 200 },
// // // //         data: { 
// // // //           label: 'Insurance Platform',
// // // //           description: 'Core business logic',
// // // //           icon: () => <span>🏢</span>
// // // //         }
// // // //       },
// // // //       {
// // // //         id: 'analytics',
// // // //         type: 'custom',
// // // //         position: { x: 500, y: 200 },
// // // //         data: { 
// // // //           label: 'Analytics Engine',
// // // //           description: 'AI/ML processing',
// // // //           icon: () => <span>🤖</span>
// // // //         }
// // // //       },
// // // //     ];

// // // //     const initialEdges = [
// // // //       {
// // // //         id: 'e1',
// // // //         source: 'driver-app',
// // // //         target: 'data-lake',
// // // //         animated: true,
// // // //         markerEnd: { type: MarkerType.ArrowClosed },
// // // //         style: { stroke: '#2563eb' }
// // // //       },
// // // //       {
// // // //         id: 'e2',
// // // //         source: 'insurance-app',
// // // //         target: 'data-lake',
// // // //         animated: true,
// // // //         markerEnd: { type: MarkerType.ArrowClosed },
// // // //         style: { stroke: '#2563eb' }
// // // //       },
// // // //       {
// // // //         id: 'e3',
// // // //         source: 'data-lake',
// // // //         target: 'analytics',
// // // //         animated: true,
// // // //         markerEnd: { type: MarkerType.ArrowClosed },
// // // //         style: { stroke: '#2563eb' }
// // // //       },
// // // //       {
// // // //         id: 'e4',
// // // //         source: 'data-lake',
// // // //         target: 'risk-dashboard',
// // // //         animated: true,
// // // //         markerEnd: { type: MarkerType.ArrowClosed },
// // // //         style: { stroke: '#2563eb' }
// // // //       },
// // // //     ];

// // // //     setNodes(initialNodes);
// // // //     setEdges(initialEdges);
// // // //   }, []);

// // // //   return (
// // // //     <div className="h-screen w-full bg-gray-50">
// // // //       <ReactFlow
// // // //         nodes={nodes}
// // // //         edges={edges}
// // // //         onNodesChange={onNodesChange}
// // // //         onEdgesChange={onEdgesChange}
// // // //         nodeTypes={nodeTypes}
// // // //         fitView
// // // //         className="bg-gray-50"
// // // //       >
// // // //         <Background />
// // // //         <Controls />
// // // //         <MiniMap />
// // // //       </ReactFlow>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SystemFlow;

// // // import React, { useState } from 'react';
// // // import { ChevronDown, Users, FileText, Building, Shield, BarChart } from 'lucide-react';

// // // type SectionKey = 'vision' | 'architecture' | 'implementation';

// // // interface SectionDetail {
// // //   title: string;
// // //   content: string;
// // // }

// // // interface Section {
// // //   title: string;
// // //   subtitle: string;
// // //   content: string;
// // //   details: SectionDetail[];
// // // }

// // // interface Sections {
// // //   [key: string]: Section;
// // // }

// // // const SystemArchitecture = () => {
// // //   const [activeSection, setActiveSection] = useState<SectionKey>('vision');
// // //   const [expandedDetail, setExpandedDetail] = useState<number | null>(null);

// // //   const sections: Sections = {
// // //     vision: {
// // //       title: "The Vision",
// // //       subtitle: "From C-Suite Challenge to Architecture Concept",
// // //       content: "Transform traditional insurance operations into a streamlined digital ecosystem",
// // //       details: [
// // //         {
// // //           title: "Business Challenges",
// // //           content: "Manual processes, data silos, slow turnaround times"
// // //         },
// // //         {
// // //           title: "Proposed Solution",
// // //           content: "Integrated platform with real-time data flow and automated processing"
// // //         }
// // //       ]
// // //     },
// // //     architecture: {
// // //       title: "The Architecture",
// // //       subtitle: "Microservices-Based Solution",
// // //       content: "Designed scalable, interconnected services for maximum flexibility",
// // //       details: [
// // //         {
// // //           title: "Core Components",
// // //           content: "Risk Management, Document Processing, Analytics Engine"
// // //         },
// // //         {
// // //           title: "Integration Points",
// // //           content: "AWS Services, Data Lake, AI/ML Pipeline"
// // //         }
// // //       ]
// // //     },
// // //     implementation: {
// // //       title: "The Implementation",
// // //       subtitle: "Bringing the Vision to Life",
// // //       content: "User-centric design with powerful backend processing",
// // //       details: [
// // //         {
// // //           title: "Key Features",
// // //           content: "Intelligent document processing, Real-time updates, Automated workflows"
// // //         },
// // //         {
// // //           title: "Technical Stack",
// // //           content: "Cloud-native architecture, Event-driven communication, Serverless functions"
// // //         }
// // //       ]
// // //     }
// // //   };

// // //   const userJourneySteps = [
// // //     { icon: Users, label: "Driver Input" },
// // //     { icon: FileText, label: "Document Processing" },
// // //     { icon: Building, label: "Client Review" },
// // //     { icon: Shield, label: "Broker Approval" },
// // //     { icon: BarChart, label: "Analytics" }
// // //   ] as const;

// // //   return (
// // //     <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
// // //       {/* Story Navigation */}
// // //       <div className="flex space-x-4 mb-8">
// // //         {(Object.keys(sections) as SectionKey[]).map((section) => (
// // //           <button
// // //             key={section}
// // //             onClick={() => setActiveSection(section)}
// // //             className={`px-4 py-2 rounded-lg transition-all ${
// // //               activeSection === section
// // //                 ? 'bg-blue-500 text-white'
// // //                 : 'bg-white text-gray-600 hover:bg-gray-100'
// // //             }`}
// // //           >
// // //             {sections[section].title}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Active Section Content */}
// // //       <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
// // //         <h2 className="text-3xl font-bold text-gray-800 mb-2">
// // //           {sections[activeSection].title}
// // //         </h2>
// // //         <h3 className="text-xl text-gray-600 mb-4">
// // //           {sections[activeSection].subtitle}
// // //         </h3>
// // //         <p className="text-gray-700 mb-6">{sections[activeSection].content}</p>

// // //         {/* Section Details */}
// // //         <div className="space-y-4">
// // //           {sections[activeSection].details.map((detail, index) => (
// // //             <div
// // //               key={index}
// // //               className="border rounded-lg hover:shadow-md transition-shadow"
// // //             >
// // //               <button
// // //                 onClick={() => setExpandedDetail(expandedDetail === index ? null : index)}
// // //                 className="w-full p-4 text-left flex justify-between items-center"
// // //               >
// // //                 <span className="font-semibold">{detail.title}</span>
// // //                 <ChevronDown
// // //                   className={`transform transition-transform ${
// // //                     expandedDetail === index ? 'rotate-180' : ''
// // //                   }`}
// // //                 />
// // //               </button>
// // //               {expandedDetail === index && (
// // //                 <div className="p-4 bg-gray-50 rounded-b-lg">
// // //                   <p className="text-gray-700">{detail.content}</p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* User Journey Visualization */}
// // //       {activeSection === 'implementation' && (
// // //         <div className="bg-white rounded-lg shadow-lg p-8">
// // //           <h3 className="text-2xl font-bold mb-6">User Journey Flow</h3>
// // //           <div className="flex justify-between items-center relative">
// // //             <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -z-10" />
// // //             {userJourneySteps.map((step, index) => (
// // //               <div key={index} className="flex flex-col items-center">
// // //                 <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white mb-2">
// // //                   <step.icon size={24} />
// // //                 </div>
// // //                 <span className="text-sm text-gray-600">{step.label}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SystemArchitecture;

// // import React, { useCallback } from 'react';
// // import ReactFlow, {
// //   Node,
// //   Edge,
// //   Controls,
// //   Background,
// //   useNodesState,
// //   useEdgesState,
// //   ConnectionMode,
// //   MarkerType,
// //   addEdge
// // } from 'reactflow';
// // import 'reactflow/dist/style.css';

// // interface CustomNodeData {
// //   label: string;
// //   type: 'service' | 'database' | 'interface';
// //   description: string;
// // }

// // const initialNodes: Node<CustomNodeData>[] = [
// //   {
// //     id: 'risk-dashboard',
// //     position: { x: 250, y: 0 },
// //     data: {
// //       label: 'Risk Management Dashboard',
// //       type: 'interface',
// //       description: 'Real-time risk analytics and notifications'
// //     },
// //     type: 'input'
// //   },
// //   {
// //     id: 'data-lake',
// //     position: { x: 250, y: 200 },
// //     data: {
// //       label: 'Data Lake',
// //       type: 'database',
// //       description: 'Centralized data repository'
// //     }
// //   },
// //   {
// //     id: 'driver-app',
// //     position: { x: 0, y: 200 },
// //     data: {
// //       label: 'Driver Onboarding',
// //       type: 'service',
// //       description: 'Mobile-first compliance management'
// //     }
// //   },
// //   {
// //     id: 'analytics',
// //     position: { x: 500, y: 200 },
// //     data: {
// //       label: 'Analytics Engine',
// //       type: 'service',
// //       description: 'AI/ML powered insights'
// //     }
// //   },
// //   {
// //     id: 'insurance-app',
// //     position: { x: 250, y: 400 },
// //     data: {
// //       label: 'Insurance Platform',
// //       type: 'service',
// //       description: 'Core business logic and processing'
// //     },
// //     type: 'output'
// //   }
// // ];

// // const initialEdges: Edge[] = [
// //   {
// //     id: 'e1',
// //     source: 'driver-app',
// //     target: 'data-lake',
// //     animated: true,
// //     markerEnd: { type: MarkerType.ArrowClosed },
// //     label: 'Driver Data'
// //   },
// //   {
// //     id: 'e2',
// //     source: 'data-lake',
// //     target: 'risk-dashboard',
// //     animated: true,
// //     markerEnd: { type: MarkerType.ArrowClosed },
// //     label: 'Risk Metrics'
// //   },
// //   {
// //     id: 'e3',
// //     source: 'data-lake',
// //     target: 'analytics',
// //     animated: true,
// //     markerEnd: { type: MarkerType.ArrowClosed },
// //     label: 'Raw Data'
// //   },
// //   {
// //     id: 'e4',
// //     source: 'insurance-app',
// //     target: 'data-lake',
// //     animated: true,
// //     markerEnd: { type: MarkerType.ArrowClosed },
// //     label: 'Insurance Data'
// //   }
// // ];

// // const PlatformFlow: React.FC = () => {
// //   const [nodes, onNodesChange] = useNodesState(initialNodes);
// //   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

// //   const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

// // //   const nodeColor = (node: Node<CustomNodeData>) => {
// // //     switch (node.data.type) {
// // //       case 'service':
// // //         return '#2563eb';
// // //       case 'database':
// // //         return '#7c3aed';
// // //       case 'interface':
// // //         return '#059669';
// // //       default:
// // //         return '#64748b';
// // //     }
// // //   };

// //   return (
// //     <div className="w-full h-screen bg-gray-50">
// //       <ReactFlow
// //         nodes={nodes}
// //         edges={edges}
// //         onNodesChange={onNodesChange}
// //         onEdgesChange={onEdgesChange}
// //         onConnect={onConnect}
// //         connectionMode={ConnectionMode.Loose}
// //         fitView
// //       >
// //         <Background />
// //         <Controls />
// //       </ReactFlow>
      
// //       <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow">
// //         <h2 className="text-xl font-bold mb-2">Insurance Platform Architecture</h2>
// //         <div className="flex gap-4">
// //           <div className="flex items-center">
// //             <div className="w-4 h-4 rounded-full bg-[#2563eb] mr-2" />
// //             <span>Services</span>
// //           </div>
// //           <div className="flex items-center">
// //             <div className="w-4 h-4 rounded-full bg-[#7c3aed] mr-2" />
// //             <span>Data Stores</span>
// //           </div>
// //           <div className="flex items-center">
// //             <div className="w-4 h-4 rounded-full bg-[#059669] mr-2" />
// //             <span>Interfaces</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PlatformFlow;

// // import React, { useCallback } from 'react';
// // import ReactFlow, {
// //   Node,
// //   Edge,
// //   Controls,
// //   Background,
// //   useNodesState,
// //   useEdgesState,
// //   ConnectionMode,
// //   MarkerType,
// //   Connection,
// //   addEdge
// // } from 'reactflow';
// // import 'reactflow/dist/style.css';

// // interface CustomNodeData {
// //   label: string;
// //   type: 'service' | 'database' | 'interface';
// //   description: string;
// // }

// // const initialNodes: Node<CustomNodeData>[] = [
// //   {
// //     id: 'risk-dashboard',
// //     position: { x: 250, y: 0 },
// //     data: {
// //       label: 'Risk Management Dashboard',
// //       type: 'interface',
// //       description: 'Real-time risk analytics and notifications'
// //     },
// //     type: 'input'
// //   },
// //   {
// //     id: 'data-lake',
// //     position: { x: 250, y: 200 },
// //     data: {
// //       label: 'Data Lake',
// //       type: 'database',
// //       description: 'Centralized data repository'
// //     }
// //   },
// //   {
// //     id: 'driver-app',
// //     position: { x: 0, y: 200 },
// //     data: {
// //       label: 'Driver Onboarding',
// //       type: 'service',
// //       description: 'Mobile-first compliance management'
// //     }
// //   },
// //   {
// //     id: 'analytics',
// //     position: { x: 500, y: 200 },
// //     data: {
// //       label: 'Analytics Engine',
// //       type: 'service',
// //       description: 'AI/ML powered insights'
// //     }
// //   },
// //   {
// //     id: 'insurance-app',
// //     position: { x: 250, y: 400 },
// //     data: {
// //       label: 'Insurance Platform',
// //       type: 'service',
// //       description: 'Core business logic and processing'
// //     },
// //     type: 'output'
// //   }
// // ];

// // const initialEdges: Edge[] = [
// //   {
// //     id: 'e1',
// //     source: 'driver-app',
// //     target: 'data-lake',
// //     animated: true,
// //     markerEnd: { type: MarkerType.ArrowClosed },
// //     label: 'Driver Data'
// //   },
// //   {
// //     id: 'e2',
// //     source: 'data-lake',
// //     target: 'risk-dashboard',
// //     animated: true,
// //     markerEnd: { type: MarkerType.ArrowClosed },
// //     label: 'Risk Metrics'
// //   },
// //   {
// //     id: 'e3',
// //     source: 'data-lake',
// //     target: 'analytics',
// //     animated: true,
// //     markerEnd: { type: MarkerType.ArrowClosed },
// //     label: 'Raw Data'
// //   },
// //   {
// //     id: 'e4',
// //     source: 'insurance-app',
// //     target: 'data-lake',
// //     animated: true,
// //     markerEnd: { type: MarkerType.ArrowClosed },
// //     label: 'Insurance Data'
// //   }
// // ];

// // const PlatformFlow: React.FC = () => {
// //   const [nodes, , onNodesChange] = useNodesState<CustomNodeData>(initialNodes);
// //   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

// //   const onConnect = useCallback(
// //     (params: Connection) => {
// //       setEdges((eds) => addEdge({ ...params, animated: true }, eds));
// //     },
// //     [setEdges]
// //   );

// // //   const nodeColor = (node: Node<CustomNodeData>): string => {
// // //     switch (node.data.type) {
// // //       case 'service':
// // //         return '#2563eb';
// // //       case 'database':
// // //         return '#7c3aed';
// // //       case 'interface':
// // //         return '#059669';
// // //       default:
// // //         return '#64748b';
// // //     }
// // //   };

// //   return (
// //     <div className="w-full h-screen bg-gray-50">
// //       <ReactFlow
// //         nodes={nodes}
// //         edges={edges}
// //         onNodesChange={onNodesChange}
// //         onEdgesChange={onEdgesChange}
// //         onConnect={onConnect}
// //         connectionMode={ConnectionMode.Loose}
// //         fitView
// //         nodesFocusable={false}
// //         nodesDraggable={true}
// //         zoomOnDoubleClick={false}
// //       >
// //         <Background />
// //         <Controls />
// //       </ReactFlow>
      
// //       <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow">
// //         <h2 className="text-xl font-bold mb-2">Insurance Platform Architecture</h2>
// //         <div className="flex gap-4">
// //           <div className="flex items-center">
// //             <div className="w-4 h-4 rounded-full bg-[#2563eb] mr-2" />
// //             <span>Services</span>
// //           </div>
// //           <div className="flex items-center">
// //             <div className="w-4 h-4 rounded-full bg-[#7c3aed] mr-2" />
// //             <span>Data Stores</span>
// //           </div>
// //           <div className="flex items-center">
// //             <div className="w-4 h-4 rounded-full bg-[#059669] mr-2" />
// //             <span>Interfaces</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PlatformFlow;

// import React, { useCallback } from 'react';
// import ReactFlow, {
//   Node,
//   Edge,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   ConnectionMode,
//   MarkerType,
//   Connection,
//   addEdge
// } from 'reactflow';
// import { motion } from 'framer-motion';
// import 'reactflow/dist/style.css';

// interface CustomNodeData {
//   label: string;
//   type: 'service' | 'database' | 'interface';
//   description: string;
// }

// const getNodeColor = (type: string) => {
//   switch (type) {
//     case 'service':
//       return '#2563eb';
//     case 'database':
//       return '#7c3aed';
//     case 'interface':
//       return '#059669';
//     default:
//       return '#64748b';
//   }
// };

// const initialNodes: Node<CustomNodeData>[] = [
//   {
//     id: 'risk-dashboard',
//     position: { x: 250, y: 0 },
//     data: {
//       label: 'Risk Management Dashboard',
//       type: 'interface',
//       description: 'Real-time risk analytics and notifications'
//     },
//     style: { backgroundColor: getNodeColor('interface'), color: '#ffffff' },
//     type: 'input',
//     draggable: false
//   },
//   {
//     id: 'data-lake',
//     position: { x: 250, y: 200 },
//     data: {
//       label: 'Data Lake',
//       type: 'database',
//       description: 'Centralized data repository'
//     },
//     style: { backgroundColor: getNodeColor('database'), color: '#ffffff' },
//     draggable: false
//   },
//   {
//     id: 'driver-app',
//     position: { x: 0, y: 200 },
//     data: {
//       label: 'Driver Onboarding',
//       type: 'service',
//       description: 'Mobile-first compliance management'
//     },
//     style: { backgroundColor: getNodeColor('service'), color: '#ffffff' },
//     draggable: false
//   },
//   {
//     id: 'analytics',
//     position: { x: 500, y: 200 },
//     data: {
//       label: 'Analytics Engine',
//       type: 'service',
//       description: 'AI/ML powered insights'
//     },
//     style: { backgroundColor: getNodeColor('service'), color: '#ffffff' },
//     draggable: false
//   },
//   {
//     id: 'insurance-app',
//     position: { x: 250, y: 400 },
//     data: {
//       label: 'Insurance Platform',
//       type: 'service',
//       description: 'Core business logic and processing'
//     },
//     style: { backgroundColor: getNodeColor('service'), color: '#ffffff' },
//     type: 'output',
//     draggable: false
//   }
// ];

// const initialEdges: Edge[] = [
//   {
//     id: 'e1',
//     source: 'driver-app',
//     target: 'data-lake',
//     animated: true,
//     markerEnd: { type: MarkerType.ArrowClosed },
//     label: 'Driver Data'
//   },
//   {
//     id: 'e2',
//     source: 'data-lake',
//     target: 'risk-dashboard',
//     animated: true,
//     markerEnd: { type: MarkerType.ArrowClosed },
//     label: 'Risk Metrics'
//   },
//   {
//     id: 'e3',
//     source: 'data-lake',
//     target: 'analytics',
//     animated: true,
//     markerEnd: { type: MarkerType.ArrowClosed },
//     label: 'Raw Data'
//   },
//   {
//     id: 'e4',
//     source: 'insurance-app',
//     target: 'data-lake',
//     animated: true,
//     markerEnd: { type: MarkerType.ArrowClosed },
//     label: 'Insurance Data'
//   }
// ];

// const PlatformFlow: React.FC = () => {
//   const [nodes, , onNodesChange] = useNodesState<CustomNodeData>(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = useCallback(
//     (params: Connection) => {
//       setEdges((eds) => addEdge({ ...params, animated: true }, eds));
//     },
//     [setEdges]
//   );

//   return (
//     <div className="w-full h-screen bg-gray-50 relative">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         connectionMode={ConnectionMode.Loose}
//         fitView
//         nodesFocusable={false}
//         nodesDraggable={false}
//         zoomOnDoubleClick={false}
//         preventScrolling={false}
//       >
//         <Background gap={20} size={1} />
//         <Controls />
//       </ReactFlow>

//       <motion.div 
//         className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-sm"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Insurance Platform Architecture</h2>
//         <div className="flex gap-4">
//           <div className="flex items-center">
//             <div className="w-4 h-4 rounded-full bg-[#2563eb] mr-2" />
//             <span className="text-sm text-gray-700">Services</span>
//           </div>
//           <div className="flex items-center">
//             <div className="w-4 h-4 rounded-full bg-[#7c3aed] mr-2" />
//             <span className="text-sm text-gray-700">Data Stores</span>
//           </div>
//           <div className="flex items-center">
//             <div className="w-4 h-4 rounded-full bg-[#059669] mr-2" />
//             <span className="text-sm text-gray-700">Interfaces</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PlatformFlow;



import { ResponsiveNetworkCanvas } from '@nivo/network';
import { FC } from 'react';

// Define types for node and link data
interface NodeData {
    id: string;
    color?: string;
    height?: number;
    [key: string]: any; // For additional dynamic properties
}

interface LinkData {
    source: string; // Changed to string (node ID)
    target: string; // Changed to string (node ID)
    distance:number;
}

interface NetworkData {
    nodes: NodeData[];
    links: LinkData[];
}

interface MyResponsiveNetworkCanvasProps {
    data: NetworkData;
}


export interface NetworkNode {
    id: string;
    height: number;
    size: number;
    color: string;
  }
  
  export interface NetworkLink {
    source: string;
    target: string;
    distance: number;
  }
  
  
  // Sample usage:
  export const networkData: NetworkData = {
    nodes: [
      {
        id: "Node 0",
        height: 2,
        size: 32,
        color: "rgb(244, 117, 96)"
      },
      // ... rest of your nodes
    ],
    links: [
      {
        source: "Node 0",
        target: "Node 1",
        distance: 80
      },
      // ... rest of your links
    ]
  };

const MyResponsiveNetworkCanvas: FC<MyResponsiveNetworkCanvasProps> = ({ data }) => (
    <ResponsiveNetworkCanvas
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={(link) => {
            const sourceNode = data.nodes.find((n) => n.id === (link.source as any).id);
            const targetNode = data.nodes.find((n) => n.id === (link.target as any).id);
            return 50 + (sourceNode?.height ?? 0) + (targetNode?.height ?? 0); // Dynamic distance based on node height
        }}
        centeringStrength={0.3}
        repulsivity={6}
        nodeColor={('#888')} // Fallback color
        nodeBorderWidth={1}
        nodeBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.8]],
        }}
        linkThickness={(link) => 2 + 2 * (data.nodes.find((n) => n.id === (link.target as any).id)?.height ?? 1)} // Get height from target node
    />
);

export default MyResponsiveNetworkCanvas;