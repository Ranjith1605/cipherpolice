import React from 'react';
import { Card, Statistic, Row, Col } from 'antd';
import { AlertCircle, Layout, Clock } from 'lucide-react';

interface TodayOverviewProps {
    overCapacityEpisodes: number;
    averageTabs: number;
    totalFocusedTime: string;
}

const TodayOverview: React.FC<TodayOverviewProps> = ({
    overCapacityEpisodes,
    averageTabs,
    totalFocusedTime,
}) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Today's Overview</h2>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={8}>
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <Statistic
                            title="Over-capacity Episodes"
                            value={overCapacityEpisodes}
                            prefix={<AlertCircle className="w-5 h-5 text-red-500 mr-2" />}
                            valueStyle={{ color: overCapacityEpisodes > 0 ? '#cf1322' : '#3f8600' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <Statistic
                            title="Average Tabs Today"
                            value={averageTabs}
                            prefix={<Layout className="w-5 h-5 text-blue-500 mr-2" />}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <Statistic
                            title="Total Focused Time"
                            value={totalFocusedTime}
                            prefix={<Clock className="w-5 h-5 text-green-500 mr-2" />}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default TodayOverview;
