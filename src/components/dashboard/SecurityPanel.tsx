import React from 'react';
import { Card, Statistic, Tag, Typography, Space } from 'antd';
import { ShieldCheck, ShieldAlert, Lock, Search, AlertTriangle } from 'lucide-react';

const { Text, Paragraph } = Typography;

interface SecurityPanelProps {
    trackersCount: number;
    httpsStatus: boolean;
    riskLevel: 'Low' | 'Medium' | 'High';
    explanation: string;
}

const SecurityPanel: React.FC<SecurityPanelProps> = ({
    trackersCount,
    httpsStatus,
    riskLevel,
    explanation,
}) => {
    const getRiskColor = (level: string) => {
        switch (level) {
            case 'Low': return 'success';
            case 'Medium': return 'warning';
            case 'High': return 'error';
            default: return 'default';
        }
    };

    const getRiskIcon = (level: string) => {
        switch (level) {
            case 'Low': return <ShieldCheck className="w-5 h-5 text-green-500" />;
            case 'Medium': return <ShieldAlert className="w-5 h-5 text-yellow-500" />;
            case 'High': return <AlertTriangle className="w-5 h-5 text-red-500" />;
            default: return <ShieldCheck className="w-5 h-5" />;
        }
    };

    return (
        <Card
            title={<Space><ShieldCheck /> Security & Privacy Panel</Space>}
            className="shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ height: '100%' }}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Statistic
                    title="Trackers"
                    value={trackersCount}
                    prefix={<Search className="w-4 h-4 mr-2" />}
                />
                <Statistic
                    title="HTTPS"
                    value={httpsStatus ? 'Secure' : 'Insecure'}
                    valueStyle={{ color: httpsStatus ? '#3f8600' : '#cf1322' }}
                    prefix={<Lock className="w-4 h-4 mr-2" />}
                />
                <div className="flex flex-col">
                    <Text type="secondary" className="mb-2 block">Risk Label</Text>
                    <Tag color={getRiskColor(riskLevel)} icon={getRiskIcon(riskLevel)} className="w-fit px-3 py-1 text-sm font-medium">
                        {riskLevel.toUpperCase()}
                    </Tag>
                </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <Text strong className="block mb-2">Analysis</Text>
                <Paragraph className="text-gray-600 mb-0">
                    {explanation}
                </Paragraph>
            </div>
        </Card>
    );
};

export default SecurityPanel;
