import React from 'react';
import { Typography, Card, Space, Divider } from 'antd';
import { ShieldCheck, UserCheck, EyeOff, Scale } from 'lucide-react';

const { Title, Paragraph } = Typography;

const DataEthics: React.FC = () => {
    return (
        <div className="p-8 md:p-16 max-w-5xl mx-auto">
            <Title level={1} className="text-center mb-12">Data, Ethics & Privacy</Title>

            <Paragraph className="text-lg text-gray-600 mb-12 text-center">
                At CipherPolice, we believe that your cognitive data is the most personal information you possess.
                Our "Cognitive Firewall" is built on a foundation of radical transparency and local-first processing.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <Card className="shadow-sm border-0 bg-blue-50">
                    <Space direction="vertical" size="middle">
                        <Space className="text-blue-600 font-bold text-lg">
                            <ShieldCheck className="w-6 h-6" /> Local-Only Processing
                        </Space>
                        <Paragraph className="mb-0">
                            All behavioral analysis—including tab switching patterns and notification interaction—is processed
                            entirely on your device. We do not transmit raw activity logs to any external servers.
                        </Paragraph>
                    </Space>
                </Card>

                <Card className="shadow-sm border-0 bg-green-50">
                    <Space direction="vertical" size="middle">
                        <Space className="text-green-600 font-bold text-lg">
                            <EyeOff className="w-6 h-6" /> Minimal Metric Collection
                        </Space>
                        <Paragraph className="mb-0">
                            We only collect metadata required for cognitive load state derivation. We never record keystrokes,
                            screen contents, or personal messaging data.
                        </Paragraph>
                    </Space>
                </Card>

                <Card className="shadow-sm border-0 bg-purple-50">
                    <Space direction="vertical" size="middle">
                        <Space className="text-purple-600 font-bold text-lg">
                            <UserCheck className="w-6 h-6" /> User Consent & Control
                        </Space>
                        <Paragraph className="mb-0">
                            You have full control over the monitoring levels. Features can be toggled on or off instantly,
                            and all local history can be cleared with a single click.
                        </Paragraph>
                    </Space>
                </Card>

                <Card className="shadow-sm border-0 bg-orange-50">
                    <Space direction="vertical" size="middle">
                        <Space className="text-orange-600 font-bold text-lg">
                            <Scale className="w-6 h-6" /> GDPR Alignment
                        </Space>
                        <Paragraph className="mb-0">
                            Our architecture is designed with GDPR principles at its core: data minimization,
                            purpose limitation, and integrity & confidentiality.
                        </Paragraph>
                    </Space>
                </Card>
            </div>

            <Divider />

            <div className="mt-12">
                <Title level={3}>Our Commitment</Title>
                <Paragraph>
                    CipherPolice is not just a tool; it's a statement about digital sovereignty. We aim to protect users
                    not only from external cyber threats but from the internal cognitive exhaustion caused by the
                    modern attention-based economy.
                </Paragraph>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Zero Dark Patterns:</strong> We never use manipulative UI to keep you engaged.</li>
                    <li><strong>No Hidden Tracking:</strong> We use CipherPolice to block the trackers that other tools ignore.</li>
                    <li><strong>Open Methodology:</strong> Our cognitive load derivation logic is transparent and research-backed.</li>
                </ul>
            </div>
        </div>
    );
};

export default DataEthics;
