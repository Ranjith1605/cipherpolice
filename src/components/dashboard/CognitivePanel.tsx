import React from 'react';
import { Card, Statistic, Tag, Typography, Space, List, Badge } from 'antd';
import { Brain, Layout, Repeat, Clock, Bell, Lightbulb } from 'lucide-react';

const { Text, Paragraph } = Typography;

export type CognitiveLoadState = 'Stable' | 'Elevated' | 'Over-capacity';

interface FocusSuggestion {
    text: string;
    why: string;
}

interface CognitivePanelProps {
    state: CognitiveLoadState;
    tabsOpen: number;
    switchesPerMinute: number;
    sessionLength: string;
    notificationsOn: boolean;
    explanation: string;
    suggestions: FocusSuggestion[];
}

const CognitivePanel: React.FC<CognitivePanelProps> = ({
    state,
    tabsOpen,
    switchesPerMinute,
    sessionLength,
    notificationsOn,
    explanation,
    suggestions,
}) => {
    return (
        <Card
            title={<Space><Brain /> Cognitive Firewall Panel</Space>}
            extra={<Badge status={state === 'Stable' ? 'success' : state === 'Elevated' ? 'warning' : 'error'} text={
                <Tag color={state === 'Stable' ? 'success' : state === 'Elevated' ? 'warning' : 'error'} className="m-0">
                    {state.toUpperCase()}
                </Tag>
            } />}
            className="shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ height: '100%' }}
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Statistic
                    title="Tabs Open"
                    value={tabsOpen}
                    prefix={<Layout className="w-4 h-4 mr-2" />}
                />
                <Statistic
                    title="Switches/min"
                    value={switchesPerMinute}
                    prefix={<Repeat className="w-4 h-4 mr-2" />}
                />
                <Statistic
                    title="Session"
                    value={sessionLength}
                    prefix={<Clock className="w-4 h-4 mr-2" />}
                />
                <Statistic
                    title="Alerts"
                    value={notificationsOn ? 'On' : 'Off'}
                    prefix={<Bell className="w-4 h-4 mr-2" />}
                />
            </div>

            <div className="mb-6">
                <Text strong className="block mb-2">Internal State Insight</Text>
                <Paragraph className="text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-100">
                    {explanation}
                </Paragraph>
            </div>

            <div>
                <Text strong className="block mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" /> Focus Suggestions
                </Text>
                <List
                    size="small"
                    dataSource={suggestions}
                    renderItem={(item) => (
                        <List.Item className="border-none px-0 py-1">
                            <div className="flex flex-col">
                                <Text className="font-medium">• {item.text}</Text>
                                <Text type="secondary" className="ml-3 text-xs italic">
                                    {item.why}
                                </Text>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </Card>
    );
};

export default CognitivePanel;
