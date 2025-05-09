import React from 'react';
import { Truck, MessageSquare, ArrowRight } from 'lucide-react';

const UseCaseExample: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Customer Email Received',
      description: 'Customer sends an email asking about a delivery timeline for their order.',
      icon: <MessageSquare className="h-6 w-6" />,
      tool: 'Communication Automation Hub'
    },
    {
      id: 2,
      title: 'Email Automated Processing',
      description: 'The Communication Hub automatically identifies the order number and delivery request.',
      icon: <MessageSquare className="h-6 w-6" />,
      tool: 'Communication Automation Hub'
    },
    {
      id: 3,
      title: 'Loading Plan Creation',
      description: 'Order details are sent to the Truck Loading Optimizer for inclusion in the next delivery run.',
      icon: <Truck className="h-6 w-6" />,
      tool: 'Truck Loading Optimizer'
    },
    {
      id: 4,
      title: 'Optimized Loading Plan',
      description: 'The optimizer creates the most efficient loading plan including the new order.',
      icon: <Truck className="h-6 w-6" />,
      tool: 'Truck Loading Optimizer'
    },
    {
      id: 5,
      title: 'Automated Response',
      description: 'Customer receives an automated email with the delivery date and time window.',
      icon: <MessageSquare className="h-6 w-6" />,
      tool: 'Communication Automation Hub'
    }
  ];

  return (
    <section id="use-cases" className="section bg-light-bg dark:bg-charcoal">
      <div className="section-title">
        <h2 className="text-dark-text dark:text-white">See Our Tools in Action</h2>
        <p className="text-secondary-text dark:text-light-gray">Here's a real-world example of how our tools work together to streamline logistics operations.</p>
      </div>
      
      <div className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-medium mb-8 text-center text-dark-text dark:text-white">Customer Delivery Request Workflow</h3>
        
        <div className="relative">
          {/* Flow Lines */}
          <div className="absolute left-16 md:left-1/2 top-8 bottom-8 w-0.5 bg-secondary-text/30 dark:bg-medium-gray"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12">
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Step Number */}
                <div className="absolute left-16 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-accent-green text-white font-bold z-10">
                  {step.id}
                </div>
                
                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="card border-accent-green/30 hover:border-accent-green transition-all bg-white dark:bg-slate-gray">
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-md ${
                        step.tool === 'Communication Automation Hub' 
                          ? 'bg-gradient-brand/10 text-accent-green'
                          : 'bg-gradient-brand/5 text-accent-green'
                      }`}>
                        {step.icon}
                      </div>
                      <span className="ml-2 text-xs font-medium text-secondary-text dark:text-medium-gray">{step.tool}</span>
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-dark-text dark:text-white">{step.title}</h4>
                    <p className="text-secondary-text dark:text-light-gray">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty Space */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
              
              {/* Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-6">
                  <ArrowRight className="w-5 h-5 text-accent-green rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Outcome */}
        <div className="mt-16 p-8 rounded-lg border border-accent-green/20 bg-gradient-brand/5 text-center">
          <h4 className="text-xl font-medium mb-4 text-dark-text dark:text-white">The Result</h4>
          <p className="mb-2 text-secondary-text dark:text-light-gray">Customer request processed automatically without manual intervention</p>
          <p className="mb-2 text-secondary-text dark:text-light-gray">Delivery optimized for efficiency as part of a full truckload</p>
          <p className="text-secondary-text dark:text-light-gray">Customer kept informed throughout the process with minimal wait time</p>
        </div>
      </div>
    </section>
  );
};

export default UseCaseExample;